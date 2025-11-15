import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/message-page";

export const meta: Route.MetaFunction = ({ params }) => {
  return [{ title: `Message ${params.messageId} | wemake` }];
};

export function loader({ request, params }: Route.LoaderArgs) {
  return {};
}

export function action({ request, params }: Route.ActionArgs) {
  return {};
}

export default function MessagePage({
  loaderData,
  params,
}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero
        title={`Message ${params.messageId}`}
        subtitle="View your message"
      />
    </div>
  );
}

