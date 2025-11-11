import type { Router } from "react-router";
import type { Route } from "./+types/categories-page";

export function loader({ request, params }: Route.LoaderArgs) {
  return {};
}

export async function action({ request, params }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: "Product Categories" },
  { name: "description", content: "Browse product categories" },
];

export default function Component({
  loaderData,
}: Router.ComponentProps<typeof loader, typeof action>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Categories</h1>
    </div>
  );
}


