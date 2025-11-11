import type { Router } from "react-router";
import type { Route } from "./+types/leaderboard-page";

export function loader({ request, params }: Route.LoaderArgs) {
  return {};
}

export async function action({ request, params }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: "Product Leaderboards" },
  { name: "description", content: "Top product leaderboards" },
];

export default function Component({
  loaderData,
  actionData,
}: Router.ComponentProps<typeof loader, typeof action>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Leaderboards</h1>
    </div>
  );
}


