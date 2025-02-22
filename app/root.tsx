import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import Navigation from "./common/components/navigation";
import { Settings } from "luxon";
import Footer from "./common/components/footer";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Belleza&family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Onest:wght@100..900&family=Ovo&family=Space+Grotesk:wght@300..700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  Settings.defaultLocale = "en-US";
  Settings.defaultZone = "America/New_York";
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main>
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { pathname } = useLocation();
  return (<div className={`flex flex-col min-h-screen ${pathname.includes("/auth") ? "pt-0" : "pt-16"}`}>
    {!pathname.includes("/auth") && <Navigation isLoggedIn={true} hasNotifications={true} hasMessages={true} />}
    <div className={`${pathname.includes("/auth") ? "pb-0" : "pb-16 px-4 max-w-screen-2xl"}  w-full mx-auto`}>
      <Outlet />
    </div>
    {!pathname.includes("/auth") && <Footer />}
  </div>)
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main>
      <div className="w-full h-[calc(100vh-6rem)] min-h-[36rem]  md:h-[calc(100vh-10rem)] lg:min-h-[48rem]  p-10 flex justify-center items-center text-lg text-center bg-gradient-to-b from-gray-900 to-purple-600 text-white rounded-xl">
        <h1 className="text-2xl font-bold">{message}</h1>
        <p className="text-md">{details}</p>
      </div>
    </main>
  );
}
