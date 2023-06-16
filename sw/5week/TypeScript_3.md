<div class="sc-gsTEea gleZcK emd-markdown material-simple-view__note"><p class="sc-hKgJUU kTpEyo elicemd elicemd--theme-light" style="transition: opacity 300ms ease-in-out 0s; opacity: 1;"><h2 id="interface">Interface</h2><h3 id="1-interface란">1. Interface란?</h3><p>인터페이스(Interface)란 코드 내 계약(약속, 규칙)을 정의하는 강력한 방법입니다. 인터페이스는 일반적으로 변수, 함수, 클래스의 타입을 체크하기 위해 사용됩니다. 예를 들면 아래 <code>elice</code> 변수는 <code>Person</code> 인터페이스의 계약을 준수해야만 합니다.</p><pre><code class="hljs"><span class="hljs-keyword">interface</span> Person {
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>,
  <span class="hljs-attr">age</span>: <span class="hljs-built_in">number</span>
}

<span class="hljs-keyword">let</span> <span class="hljs-attr">elice</span>: <span class="hljs-title class_">Person</span> = {<span class="hljs-attr">name</span>: <span class="hljs-string">"rabbit"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">13</span>};
</code></pre><p>앞서 살펴보았던 타입을 정의하는 type alias에 대해 기억하시나요?</p><pre><code class="hljs"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Human</span> = {
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">age</span>: <span class="hljs-built_in">number</span>;
};
</code></pre><p>type alias는 인터페이스와 비슷한 역할을 하지만, type alias는 확장(<code>extends</code>)가 불가능하고 인터페이스는 확장이 가능합니다. 따라서 웬만하면 인터페이스를 사용하는 것이 좋습니다. 인터페이스의 확장에 대해서는 뒤에서 학습할 예정입니다.</p><p>인터페이스는 객체나 함수의 스펙, 배열의 접근 방식, 클래스 같은 범주에 대해 계약을 정의할 수 있습니다. 예를 들어 아래와 같은 인터페이스가 있다고 가정할 때 각각의 인터페이스 사용 예시를 살펴보세요.</p><pre><code class="hljs"><span class="hljs-keyword">interface</span> Person {
    <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>
}
</code></pre><ul><li>변수<pre><code class="hljs"><span class="hljs-keyword">let</span> <span class="hljs-attr">elice</span>: <span class="hljs-title class_">Person</span> = {<span class="hljs-attr">name</span>: <span class="hljs-string">"rabbit"</span>};
</code></pre></li><li>함수<pre><code class="hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">greeting</span>(<span class="hljs-params">person: Person</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">`Hello <span class="hljs-subst">${person.name}</span>`</span>);
}
</code></pre></li><li>클래스<pre><code class="hljs"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Member</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Person</span> {
    <span class="hljs-title function_">constructor</span> (
        <span class="hljs-keyword">public</span> <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>
    ) { }
}
</code></pre></li><li>배열의 경우 아래와 같이 인터페이스를 이용할 수 있습니다.<pre><code class="hljs"><span class="hljs-keyword">interface</span> Person {
    [<span class="hljs-attr">index</span>: <span class="hljs-built_in">number</span>]: <span class="hljs-built_in">string</span>;
}
<span class="hljs-keyword">let</span> <span class="hljs-attr">people</span>: <span class="hljs-title class_">Person</span> = [<span class="hljs-string">"rabbit"</span>, <span class="hljs-string">"cheshire"</span>, <span class="hljs-string">"queen"</span>];
</code></pre></li></ul><blockquote><p><strong>추상 클래스 vs 인터페이스</strong><br>추상 클래스는 일반 클래스와 달리 추상 메소드가 포함된 클래스로 일반 메소드를 포함할 수 있습니다. 반면 인터페이스는 모든 메소드가 추상 메소드여야 하는 차이가 있습니다.<br>추상 클래스는 상속을 통해 추상 메소드의 구현을 강제하여 자식 클래스에서 일부 동작을 구현하도록 만든 것입니다. 인터페이스는 모든 구현에 대한 계약을 작성해둔 것입니다. 추상 클래스는 프로그램의 전체 구조를 잡기 위해 사용하고, 인터페이스는 기본적인 설계도로써 개발 협업에서 사용하기 용이합니다.</p></blockquote><h3 id="2-properties">2. Properties</h3><p>타입스크립트의 컴파일러는 객체 프로퍼티의 두 가지 요소를 검사하는데 바로 프로퍼티의 타입과 필수 요소 유무입니다.</p><p>필수 요소 유무를 컨트롤하기 위해서 Optional 프로퍼티인 <code>?</code>을 이용할 수 있습니다. 프로퍼티 선언 시 이름의 끝에 <code>?</code>를 붙여서 표시합니다. <code>?</code>를 이용해 인터페이스에 속하지 않는 프로퍼티의 사용은 방지할 수 있습니다. 이는 객체 안의 몇 개의 프로퍼티만 채워서 사용하는 함수에 유용합니다. (이를 "option bags" 패턴이라고 부릅니다.)</p><pre><code class="hljs"><span class="hljs-keyword">interface</span> SquareConfig {
  color?: <span class="hljs-built_in">string</span>
  width?: <span class="hljs-built_in">number</span>
}
</code></pre><p>또한 객체가 처음 생성될 때 값 설정이 가능하고, 이후 수정이 불가능하도록 설정하는 <code>readonly</code> 프로퍼티도 있습니다. 앞서 클래스 속성의 <code>readonly</code>와 동일합니다. 마찬가지로 역할도 <code>const</code>와 유사하며, 사용되는 위치가 다릅니다.</p><pre><code class="hljs"><span class="hljs-keyword">interface</span> Point {
  <span class="hljs-keyword">readonly</span> <span class="hljs-attr">x</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-keyword">readonly</span> <span class="hljs-attr">y</span>: <span class="hljs-built_in">number</span>
}
</code></pre><h3 id="3-interface-types">3. interface types</h3><p>앞서 살펴보았듯이 타입스크립트에서 인터페이스는 함수와 클래스에서 사용이 가능합니다.</p><ul><li>함수: 인터페이스를 이용해 함수의 타입, 인자의 타입, 반환 값의 타입을 정의할 수 있습니다. 위에서 보았던 예시는 인자의 타입을 <code>Person</code>으로 정의하고 있습니다.<pre><code class="hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">greeting</span>(<span class="hljs-params">person: Person</span>): <span class="hljs-built_in">void</span> {
    ...
}
</code></pre></li><li>클래스 : 클래스가 특정 계약(통신 프로토콜)을 충족하도록 명시적으로 강제합니다. 선언한 인터페이스를 클래스 뒤에 <code>implements</code>하여 사용하며, 클래스는 인터페이스에 명시된 메소드를 반드시 구현해야 합니다. 위에서 보았던 예시는 <code>Member</code> 클래스가 <code>Person</code> 인터페이스를 <code>implements</code>하고 있는 것이며, 만약 <code>Person</code> 인터페이스에 추상 메소드가 있었다면 <code>Member</code> 클래스에서 구현해야 합니다.<pre><code class="hljs"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Member</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Person</span> {
    ...
}
</code></pre></li><li>인터페이스 확장 : 클래스와 마찬가지로 인터페이스도 인터페이스 간의 확장이 가능합니다. 확장을 위해서는 <code>extends</code> 키워드를 사용합니다. <code>Dog</code> 인터페이스에서 <code>Animal</code> 인터페이스를 확장하고 있습니다.<pre><code class="hljs"><span class="hljs-keyword">interface</span> Animal {
    <span class="hljs-title function_">makeSound</span>(): <span class="hljs-built_in">void</span>
}
<span class="hljs-keyword">interface</span> Dog <span class="hljs-keyword">extends</span> Animal {
    <span class="hljs-attr">speed</span>: <span class="hljs-built_in">number</span>
}
</code></pre></li><li>하이브리드 타입 : 자바스크립트의 유연하고 동적인 타입 특성에 따라 인터페이스에서 여러 가지 타입을 조합해서 사용할 수 있습니다. 예를 들어 함수 타입이면서 동시에 객체 타입을 정의할 수 있는 인터페이스를 만들 수 있습니다. 아래는 <code>Counter</code> 인터페이스는 함수로서 호출도 가능하고, 여러 프로퍼티도 가지고 있습니다.<br><code>getCounter()</code> 함수에 나오는 <code>as</code>는 타입 단언을 위한 문법으로, 말 그대로 타입을 컴파일러가 추론하지 않도록 프로그래머가 직접 지정하는 것입니다.<pre><code class="hljs"><span class="hljs-keyword">interface</span> Counter {
    (<span class="hljs-attr">start</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">string</span>;
    <span class="hljs-attr">interval</span>: <span class="hljs-built_in">number</span>;
    <span class="hljs-title function_">reset</span>(): <span class="hljs-built_in">void</span>;
}
<span class="hljs-keyword">function</span> <span class="hljs-title function_">getCounter</span>(<span class="hljs-params"></span>): <span class="hljs-title class_">Counter</span> {
    <span class="hljs-keyword">let</span> counter = <span class="hljs-keyword">function</span> (<span class="hljs-params">start: <span class="hljs-built_in">number</span></span>) {} <span class="hljs-keyword">as</span> <span class="hljs-title class_">Counter</span>;
    counter.<span class="hljs-property">interval</span> = <span class="hljs-number">123</span>;
    counter.<span class="hljs-property">reset</span> = <span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) {};
    <span class="hljs-keyword">return</span> counter;
}
</code></pre></li></ul><h3 id="4-디자인-패턴-strategy-pattern">4. 디자인 패턴 (Strategy pattern)</h3><p>전략 패턴(Strategy pattern)이란 객체가 할 수 있는 행위들을 전략으로 만들어 두고, 동적으로 행위의 수정이 필요한 경우 전략만 수정이 가능하도록 만든 패턴입니다.</p><p>예를 들어 자판기 결제를 위한 <code>pay</code> 메소드가 있다고 가정합니다. 결제를 위한 다양한 방법이 있을텐데, 새로운 결제 수단이 추가될 때마다 <code>pay</code> 메소드에서 조건문을 이용해서 분기를 추가한다면 확장성이 떨어집니다. (소프트웨어 개체가 확장에 열려있어야 한다는 OCP(Open Closed Principle) 원칙에 위배됩니다.)</p><p>따라서 전략 패턴을 적용하여 이를 해결할 수 있습니다. 인터페이스를 이용해 결제를 하는 것 자체는 고정적으로 두고, 결제 방법(전략)을 인터페이스를 이용해 구현해 내는 것입니다. 예를 들어 결제를 하는 행위를 <code>implements</code>하되 현금으로 결제하는 메소드, 카드로 결제하는 메소드를 구분해서 구현하는 것입니다.</p></p><div class="sc-dlfnuX bJgQKs" style="transition: opacity 300ms ease-in-out 0s; opacity: 0; width: 0px; height: 0px; overflow: hidden;"><div class="sc-bdfBQB DIWNs" role="alert" aria-busy="true" style="margin-bottom: 1rem; width: 10rem; height: 2.25rem; background-size: 100rem 2.25rem; animation-duration: 1.5s, 200ms;"></div><div class="sc-bdfBQB DIWNs" role="alert" aria-busy="true" style="margin-bottom: 0.75rem; width: 70%; height: 1rem; background-size: 700% 1rem; animation-duration: 1.5s, 200ms;"></div><div class="sc-bdfBQB DIWNs" role="alert" aria-busy="true" style="margin-bottom: 0.75rem; width: 60%; height: 1rem; background-size: 600% 1rem; animation-duration: 1.5s, 200ms;"></div><div class="sc-bdfBQB DIWNs" role="alert" aria-busy="true" style="margin-bottom: 0rem; width: 50%; height: 1rem; background-size: 500% 1rem; animation-duration: 1.5s, 200ms;"></div></div></div>