import React from "react";
import { useRouter } from "next/router";
import { CounterView } from "@/views/counter/counter.view";
import { TodoView } from "@/views/Todo.view";
export default function AppPage() {
  const router = useRouter();
  const { app } = router.query;

  /** 1. 조건대신 객체를 선언해서 참조하는 방식 */
  const COMPONENT = {
    counter: <CounterView />,
  } as const;

  // const ComponentProxy = new Proxy(COMPONENT, {
  //   get(target, key: keyof typeof COMPONENT) {
  //     if (key in target) {
  //       return target[key];
  //     }

  //     return null;
  //   },
  // });

  /** useMemo를 활용하는 또다른 방법? */
  const Component = React.useMemo(() => {
    switch (app) {
      case "counter":
        return <CounterView />;
      case "todo":
        return <TodoView />;
      default:
        return null;
    }
  }, [app]);

  /** useMemo를 안쓰고 사용하는방법 - IIFE */
  const ComponentWithoutUseMemo = ((app?: string) => {
    switch (app) {
      case "counter":
        return <CounterView />;
      default:
        return null;
    }
  })(app?.toString());

  return (
    <React.Fragment>
      {Component}
      {/* {ComponentWithoutUseMemo} */}
      {/* {ComponentProxy[app as keyof typeof COMPONENT]} */}
    </React.Fragment>
  );
}
