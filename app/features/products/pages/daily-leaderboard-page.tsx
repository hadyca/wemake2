import type { Router } from "react-router";
import type { Route } from "./+types/daily-leaderboard-page";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month, day } = params;
  return { year, month, day };
}

export async function action({ request, params }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: "Daily Leaderboard" },
  { name: "description", content: "Daily product leaderboard" },
];

export default function Component({
  loaderData,
}: Router.ComponentProps<typeof loader, typeof action>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Daily Leaderboard</h1>
      <p className="text-muted-foreground mt-2">
        {loaderData?.year}/{loaderData?.month}/{loaderData?.day}
      </p>
    </div>
  );
}
