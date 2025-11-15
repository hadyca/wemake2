import type { Route } from "./+types/social-start-page";
import { useParams } from "react-router";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Social Login Start | wemake" },
    { name: "description", content: "Start social authentication" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  return {};
}

export function action({ request, params }: Route.ActionArgs) {
  return {};
}

export default function SocialStartPage() {
  const { provider } = useParams();
  
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Social Login</h1>
        <p className="text-muted-foreground">
          Redirecting to {provider} authentication...
        </p>
      </div>
    </div>
  );
}

