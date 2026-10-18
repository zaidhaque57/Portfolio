import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{ className?: string; id?: string }>;

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div id={id} className={`container ${className}`.trim()}>
      {children}
    </div>
  );
}
