import type { Router } from "react-router";
import type { Route } from "./+types/search-page";

export function loader({ request, params }: Route.LoaderArgs) {
  return {};
}

export async function action({ request, params }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: "Search Products" },
  { name: "description", content: "Search products" },
];

export default function Component({
  loaderData,
}: Router.ComponentProps<typeof loader, typeof action>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Search</h1>
    </div>
  );
}


