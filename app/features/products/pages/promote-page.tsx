import type { Router } from "react-router";
import type { Route } from "./+types/promote-page";

export function loader({ request, params }: Route.LoaderArgs) {
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: "Promote Product" },
  { name: "description", content: "Promote your product" },
];

export default function Component({
  loaderData,
  actionData,
}: Router.ComponentProps<typeof loader, typeof action>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Promote</h1>
    </div>
  );
}


