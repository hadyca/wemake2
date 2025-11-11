import type { Router } from "react-router";
import type { Route } from "./+types/yearly-leaderboard-page";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year } = params;
  return { year };
}

export async function action({ request, params }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: "Yearly Leaderboard" },
  { name: "description", content: "Yearly product leaderboard" },
];

export default function Component({
  loaderData,
}: Router.ComponentProps<typeof loader, typeof action>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Yearly Leaderboard</h1>
      {loaderData?.year ? (
        <p className="text-muted-foreground mt-2">Year: {loaderData.year}</p>
      ) : null}
    </div>
  );
}


