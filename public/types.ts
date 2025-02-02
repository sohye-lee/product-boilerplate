import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";

export namespace Route {
  export type LoaderArgs = LoaderFunctionArgs;
  export type ActionArgs = ActionFunctionArgs;
  export type ComponentProps<T> = {
    loaderData: T;
    actionData?: any;
  };
}
