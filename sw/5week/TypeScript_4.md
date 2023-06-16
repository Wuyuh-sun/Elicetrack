<div class="sc-gsTEea gleZcK emd-markdown material-simple-view__note"><p class="sc-hKgJUU kTpEyo elicemd elicemd--theme-light" style="transition: opacity 300ms ease-in-out 0s; opacity: 1;"><h2 id="generic">Generic</h2><h3 id="1-generic이란">1. Generic이란?</h3><p>앞서 유틸리티 타입을 다룰 때 잠깐 살펴보았던 제네릭을 자세히 다뤄봅시다. 제네릭(Generic)이란 어떤 함수나 클래스가 사용할 타입을 생성 단계가 아닌 사용 단계에서 정의하는 프로그래밍 기법입니다. 즉, 타입을 명시할 때 선언 시점이 아닌 생성 시점에 명시하여 하나의 타입으로만 사용하지 않고 다양한 타입을 사용할 수 있습니다. 일반적인 정적 타입 언어는 함수나 클래스를 정의할 때 타입을 선언해야 하지만, 제네릭을 이용해 코드가 수행될 때 타입이 명시되도록 하는 것입니다.</p><p>예를 들어 문자를 그대로 반환하는 함수에 아래와 같이 제네릭을 적용할 수 있습니다.</p><pre><code class="hljs"><span class="hljs-keyword">function</span> echo&lt;T&gt;(<span class="hljs-attr">text</span>: T): T {
  <span class="hljs-keyword">return</span> text;
}
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(echo&lt;<span class="hljs-built_in">string</span>&gt;(<span class="hljs-string">"hi"</span>));
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(echo&lt;<span class="hljs-built_in">number</span>&gt;(<span class="hljs-number">10</span>));
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(echo&lt;<span class="hljs-built_in">boolean</span>&gt;(<span class="hljs-literal">true</span>));
</code></pre><p>여기서 식별자 T는 Type의 약자로, 추가될 때마다 U, V, … 순으로 추가하는 것이 일반적입니다. 하지만 어떤 식별자도 상관이 없어, 필드 이름의 첫 글자를 사용하기도 합니다.</p><p><strong>제네릭을 사용하는 이유</strong></p><ul><li>제네릭을 사용하면 재사용성이 높은 함수나 클래스를 생성할 수 있습니다. 위의 <code>echo</code> 함수에서 제네릭을 사용하지 못했다면 타입별로 하나의 함수를 만들어야 할 것입니다. 제네릭을 사용하면 하나만 선언해도 여러 타입에서 동작이 가능합니다.</li><li>제네릭을 사용하면 중복되는 코드가 줄어들고 반환되는 타입을 명시하기 때문에 코드의 가독성이 좋아집니다.</li><li>만약 제네릭이 없다면 아래와 같이 <code>any</code> 타입을 이용해야 합니다.<pre><code class="hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">echo2</span>(<span class="hljs-params">text: <span class="hljs-built_in">any</span></span>): <span class="hljs-built_in">any</span> {
    <span class="hljs-keyword">return</span> text;
}
</code></pre><ul><li>하지만 <code>any</code> 타입은 컴파일 시 타입을 체크하지 않기 때문에 입력된 타입에 대한 메소드의 힌트를 사용할 수 없고, 컴파일 시 발견되는 에러를 발견할 수 없게됩니다.</li></ul></li></ul><h3 id="2-generic으로-함수와-클래스-만들기">2. Generic으로 함수와 클래스 만들기</h3><ul><li><strong>제네릭을 이용한 함수 생성</strong><br>앞서 살펴보았듯 꺽쇠(<code>&lt;&gt;</code>)와 식별자를 입력해 제네릭을 만들 수 있습니다. 다른 예시로 배열을 입력 받아 정렬 후 반환하는 제네릭을 만든다면, 아래와 같이 만들고 사용할 수 있습니다.</li></ul><pre><code class="hljs"><span class="hljs-keyword">function</span> sort&lt;T&gt;(<span class="hljs-attr">items</span>: T[]): T[] {
  <span class="hljs-keyword">return</span> items.<span class="hljs-title function_">sort</span>();
}
<span class="hljs-keyword">const</span> <span class="hljs-attr">nums</span>: <span class="hljs-built_in">number</span>[] = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">const</span> <span class="hljs-attr">chars</span>: <span class="hljs-built_in">string</span>[] = [<span class="hljs-string">"a"</span>, <span class="hljs-string">"b"</span>, <span class="hljs-string">"c"</span>, <span class="hljs-string">"d"</span>];
sort&lt;<span class="hljs-built_in">number</span>&gt;(nums);
sort&lt;<span class="hljs-built_in">string</span>&gt;(chars);
</code></pre><ul><li><strong>제네릭을 사용한 클래스 생성</strong><br>클래스에서는 제네릭을 어떻게 사용하는지 간단한 큐를 구현해보며 살펴보겠습니다. 마찬가지로 클래스 옆에 <code>&lt;T&gt;</code>를 작성하며, 필드나 메소드에 해당 식별자를 타입으로 명시해주면 됩니다.<br><code>pop()</code> 메소드에 있는 <code>|</code>는 유니온 타입을 사용하기 위한 연산자입니다. 유니온 타입은 명시된 타입 중 하나가 올 수 있다는 것을 나타냅니다. 여기서는 T 타입이 반환되거나, 배열이 빈 경우 undefined가 반환되기 때문에 두 가지를 명시하였습니다.</li></ul><pre><code class="hljs"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Queue</span>&lt;T&gt; {

  <span class="hljs-keyword">protected</span> <span class="hljs-attr">data</span>: <span class="hljs-title class_">Array</span>&lt;T&gt; = [];
  
  <span class="hljs-title function_">push</span>(<span class="hljs-params">item: T</span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-title function_">push</span>(item);
  }


  <span class="hljs-title function_">pop</span>(): T | <span class="hljs-literal">undefined</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-title function_">shift</span>();
  }
}
</code></pre><h3 id="3-union-type">3. Union type</h3><p>유니온(Union) 타입은 어떤 타입이 올 지 경우의 수를 고려하여 타입을 명시하는 것으로 <code>|</code>를 이용해 선언합니다. 제네릭과 마찬가지로 유니온 타입을 이용하여 여러 가지 타입을 다룰 수 있습니다.</p><p>하지만 유니온 타입의 리턴 값은 사용된 하나의 타입이 아니라 선언된 전체 유니온 타입으로 지정이 되며, 유니온 타입에서 선언한 타입들의 공통된 메소드만 사용할 수 있습니다. 예를 들어, <code>printMessage</code>의 경우, string과 number를 포함한 유니온 타입이기 때문에 string에서만 사용 가능한 <code>length</code> 메소드를 사용할 수 없습니다.</p><pre><code class="hljs"><span class="hljs-keyword">const</span> <span class="hljs-title function_">printMessage</span> = (<span class="hljs-params">message: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span></span>) =&gt; {
  <span class="hljs-keyword">return</span> message;
}
<span class="hljs-keyword">const</span> message1 = <span class="hljs-title function_">printMessage</span>(<span class="hljs-number">1234</span>);
<span class="hljs-keyword">const</span> message2 = <span class="hljs-title function_">printMessage</span>(<span class="hljs-string">"hello world!"</span>);

message2.<span class="hljs-property">length</span>;
</code></pre><h3 id="4-제약조건-constraints--keyof">4. 제약조건 (Constraints / keyof)</h3><p>제네릭에서 원하지 않는 속성에 접근하는 것을 막기 위해 <code>extends</code> 키워드를 이용해 제약조건(Constraints)을 사용할 수 있습니다. 아래의 경우 <code>printMessage</code>의 제네릭 타입으로 string, number 외의 타입이 오는 경우 에러가 발생하게 됩니다.</p><pre><code class="hljs"><span class="hljs-keyword">const</span> printMessage = <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">T</span> <span class="hljs-attr">extends</span> <span class="hljs-attr">string</span> | <span class="hljs-attr">number</span>&gt;</span>(message: T): T =&gt; {
  return message;
}</span>
</code></pre><p><strong>keyof</strong><br><code>keyof</code>를 이용하면 객체의 키에 제약 조건을 걸 수 있습니다. 아래의 경우 U 타입에 들어오는 값이 T 타입의 키에 포함되어 있지 않다면 에러가 발생하게 됩니다.</p><pre><code class="hljs"><span class="hljs-keyword">const</span> getProperty = <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">T</span> <span class="hljs-attr">extends</span> <span class="hljs-attr">object</span>, <span class="hljs-attr">U</span> <span class="hljs-attr">extends</span> <span class="hljs-attr">keyof</span> <span class="hljs-attr">T</span>&gt;</span>(obj: T, key: U) =&gt; {
  return obj[key]
}</span>
</code></pre><h3 id="5-디자인-패턴-factory-pattern-with-generics">5. 디자인 패턴 (Factory Pattern with Generics)</h3><p>팩토리 패턴(Factory Pattern)이란 객체를 생성하는 인터페이스만 미리 정의하고, 인스턴스를 만드는 것을 서브 클래스가 하는 패턴입니다. 여러 개의 서브 클래스를 가진 슈퍼 클래스가 있을 때, 입력에 따라 하나의 서브 클래스의 인스턴스를 반환합니다.</p><p>예를 들어 <code>Car</code> 인터페이스를 <code>implements</code>하는 <code>Bus</code> 클래스와 <code>Taxi</code> 클래스가 있다고 가정합니다. 만약 인스턴스를 생성하는 <code>CarFactory</code> 클래스가 있다고 할 때, 아래처럼 작성하는 경우 타입이 추가될 때마다 <code>getInstance</code> 메소드에서 직접 코드를 추가해야 합니다.</p><pre><code class="hljs"><span class="hljs-keyword">class</span> <span class="hljs-title class_">CarFactory</span> {
  <span class="hljs-keyword">static</span> <span class="hljs-title function_">getInstance</span>(<span class="hljs-attr">type</span>: <span class="hljs-title class_">String</span>): <span class="hljs-title class_">Car</span> {
    <span class="hljs-keyword">switch</span> (<span class="hljs-keyword">type</span>) {
      <span class="hljs-keyword">case</span> <span class="hljs-string">"bus"</span>:
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Bus</span>();
      <span class="hljs-attr">default</span>:
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Taxi</span>();
    }
  }
}
</code></pre><p>하지만 제너릭을 이용해 <code>getInstance</code> 메소드가 여러 서브 클래스를 타입으로 가질 수 있게, 즉 타입을 반환만 할 수 있게 만들고 타입을 넘겨주도록 작성한다면 새로운 타입이 추가되어도 <code>getInstance</code>를 수정할 필요가 없게 됩니다.</p><pre><code class="hljs"><span class="hljs-keyword">class</span> <span class="hljs-title class_">CarFactory</span> {
  <span class="hljs-keyword">static</span> getInstance&lt;T <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">Car</span>&gt;(<span class="hljs-attr">type</span>: { <span class="hljs-keyword">new</span> (): T }): T {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title function_">type</span>();
  }
}
</code></pre></p><div class="sc-dlfnuX bJgQKs" style="transition: opacity 300ms ease-in-out 0s; opacity: 0; width: 0px; height: 0px; overflow: hidden;"><div class="sc-bdfBQB DIWNs" role="alert" aria-busy="true" style="margin-bottom: 1rem; width: 10rem; height: 2.25rem; background-size: 100rem 2.25rem; animation-duration: 1.5s, 200ms;"></div><div class="sc-bdfBQB DIWNs" role="alert" aria-busy="true" style="margin-bottom: 0.75rem; width: 70%; height: 1rem; background-size: 700% 1rem; animation-duration: 1.5s, 200ms;"></div><div class="sc-bdfBQB DIWNs" role="alert" aria-busy="true" style="margin-bottom: 0.75rem; width: 60%; height: 1rem; background-size: 600% 1rem; animation-duration: 1.5s, 200ms;"></div><div class="sc-bdfBQB DIWNs" role="alert" aria-busy="true" style="margin-bottom: 0rem; width: 50%; height: 1rem; background-size: 500% 1rem; animation-duration: 1.5s, 200ms;"></div></div></div>