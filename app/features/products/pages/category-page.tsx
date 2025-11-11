import type { Router } from "react-router";
import type { Route } from "./+types/category-page";

export function loader({ request, params }: Route.LoaderArgs) {
  const { category } = params;
  return { category };
}

export async function action({ request, params }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: "Category" },
  { name: "description", content: "Products by category" },
];

export default function Component({
  loaderData,
}: Router.ComponentProps<typeof loader, typeof action>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Category</h1>
      {loaderData?.category ? (
        <p className="text-muted-foreground mt-2">Category: {loaderData.category}</p>
      ) : null}
    </div>
  );
}


