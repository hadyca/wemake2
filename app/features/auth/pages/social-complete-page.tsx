import type { Route } from "./+types/social-complete-page";
import { useParams } from "react-router";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Social Login Complete | wemake" },
    { name: "description", content: "Complete social authentication" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  return {};
}

export function action({ request, params }: Route.ActionArgs) {
  return {};
}

export default function SocialCompletePage() {
  const { provider } = useParams();
  
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Social Login Complete</h1>
        <p className="text-muted-foreground">
          Completing {provider} authentication...
        </p>
      </div>
    </div>
  );
}

