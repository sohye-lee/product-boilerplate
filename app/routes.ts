import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),
  ...prefix("products", [
    index("features/products/pages/products-page.tsx"),
    ...prefix("leaderboards", [
      index("features/products/pages/leaderboards-page.tsx"),
      route(
        "/yearly/:year",
        "features/products/pages/yearly-leaderboards-page.tsx"
      ),
      route(
        "/monthly/:year/:month",
        "features/products/pages/monthly-leaderboards-page.tsx"
      ),
      route(
        "/weekly/:year/:week",
        "features/products/pages/weekly-leaderboards-page.tsx"
      ),
      route(
        "/daily/:year/:month/:day",
        "features/products/pages/daily-leaderboards-page.tsx"
      ),
      route(
        "/:period",
        "features/products/pages/leaderboards-redirection-page.tsx"
      ),
    ]),
    ...prefix("categories", [
      index("features/products/pages/categories-page.tsx"),
      route("/:category", "features/products/pages/category-page.tsx"),
    ]),
    route("/search", "features/products/pages/search-page.tsx"),
    route("/submit", "features/products/pages/submit-page.tsx"),
    route("/promote", "features/products/pages/promote-page.tsx"),
    ...prefix("/:productId", [
      index("features/products/pages/product-redirection-page.tsx"),
      layout("features/products/layouts/product-layout.tsx", [
        route("/overview", "features/products/pages/product-overview-page.tsx"),
        ...prefix("/reviews", [
          index("features/products/pages/product-reviews-page.tsx"),
        ]),
      ]),
    ]),
  ]),
  ...prefix("jobs", [
    index("features/jobs/pages/jobs-page.tsx"),
    route("/submit", "features/jobs/pages/submit-job-page.tsx"),
    route("/:job", "features/jobs/pages/job-page.tsx"),
  ]),
  ...prefix("teams", [
    index("features/teams/pages/teams-page.tsx"),
    route("/:team", "features/teams/pages/team-page.tsx"),
    route("create", "features/teams/pages/create-team-page.tsx"),
  ]),
  ...prefix("community", [
    index("features/community/pages/comunity-page.tsx"),
    route("/create", "features/community/pages/create-post-page.tsx"),
  ]),
  ...prefix("ideas", [index("features/ideas/pages/ideas-page.tsx")]),
] satisfies RouteConfig;
