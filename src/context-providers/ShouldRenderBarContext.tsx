import React, { createContext, useState, FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const ShouldRenderBarContext = createContext<
  [boolean, ((shouldRender: boolean) => void) | undefined]
>([false, undefined]);

export function ShouldRenderBarProvider({ children }: Props) {
  const [ShouldRenderBar, setShouldRenderBar] = useState(false);

  return (
    <ShouldRenderBarContext.Provider
      value={[ShouldRenderBar, setShouldRenderBar]}
    >
      {children}
    </ShouldRenderBarContext.Provider>
  );
}
