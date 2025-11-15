import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/messages-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Messages | wemake" }];
};

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function MessagesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero title="Messages" subtitle="Your conversations" />
    </div>
  );
}

