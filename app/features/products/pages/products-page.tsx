import type { Router } from "react-router";
import type { Route } from "./+types/products-page";

export function loader({ request, params }: Route.LoaderArgs) {
  return {};
}

export async function action({ request, params }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: "Products" },
  { name: "description", content: "Explore products" },
];

export default function Component({
  loaderData,
  actionData,
}: Router.ComponentProps<typeof loader, typeof action>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Products</h1>
    </div>
  );
}


