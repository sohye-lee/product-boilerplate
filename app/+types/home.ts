import type { MetaFunction as RouterMetaFunction } from "react-router";

export namespace Route {
  export interface LoaderData {
    message: string;
  }

  export interface ActionData {}

  export interface ComponentProps {
    loaderData: LoaderData;
    actionData?: ActionData;
  }

  export interface LoaderArgs {
    request: Request;
    params: Record<string, string>;
  }

  export interface ActionArgs extends LoaderArgs {
    formData: FormData;
  }

  export type MetaFunction = RouterMetaFunction;
}
