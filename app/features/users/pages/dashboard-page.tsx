import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/dashboard-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Dashboard | wemake" }];
};

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function DashboardPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero title="Dashboard" subtitle="Manage your products and ideas" />
    </div>
  );
}

