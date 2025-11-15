import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/dashboard-product-page";

export const meta: Route.MetaFunction = ({ params }) => {
  return [{ title: `Product ${params.productId} | wemake` }];
};

export function loader({ request, params }: Route.LoaderArgs) {
  return {};
}

export function action({ request, params }: Route.ActionArgs) {
  return {};
}

export default function DashboardProductPage({
  loaderData,
  params,
}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero
        title={`Product ${params.productId}`}
        subtitle="Manage your product"
      />
    </div>
  );
}

