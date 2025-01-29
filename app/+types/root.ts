import type { LinksFunction } from "react-router";
import type { ReactNode } from "react";

export namespace Route {
  export type LinksFunction = LinksFunction;
  export type ErrorBoundaryProps = {
    error: Error;
    children?: ReactNode;
  };
}
