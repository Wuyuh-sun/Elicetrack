import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const RootLayout = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header>
          <img
            src={"/images/elice_logo.png"}
            alt={"logo"}
            style={{
              transform: "translate3d(0, 0, 0)",
            }}
          />
        </header>
        {props.children}
      </div>
    </QueryClientProvider>
  );
};
