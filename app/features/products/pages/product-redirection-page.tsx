import { redirect } from "react-router";
import type { Route } from "./+types/leaderboards-redirection-page";

export function loader({params}: Route.LoaderArgs) {
    const productId = params.productId;
    const url = `/products/${productId}/overview`;

    return redirect(url);
}

// export default function ProductRedirectionPage() {
//     return null;
// }