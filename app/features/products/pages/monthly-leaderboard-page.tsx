import type { Router } from "react-router";
import type { Route } from "./+types/monthly-leaderboard-page";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month } = params;
  return { year, month };
}

export async function action({ request, params }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: "Monthly Leaderboard" },
  { name: "description", content: "Monthly product leaderboard" },
];

export default function Component({
  loaderData,
}: Router.ComponentProps<typeof loader, typeof action>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Monthly Leaderboard</h1>
      <p className="text-muted-foreground mt-2">
        {loaderData?.year}/{loaderData?.month}
      </p>
    </div>
  );
}


