import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/notifications-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Notifications | wemake" }];
};

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function NotificationsPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero title="Notifications" subtitle="Your notifications" />
    </div>
  );
}

