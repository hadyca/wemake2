import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/dashboard-ideas-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "My Ideas | wemake" }];
};

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function DashboardIdeasPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero title="My Ideas" subtitle="Manage your ideas" />
    </div>
  );
}

