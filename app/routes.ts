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
      )
    ]),
    ...prefix("categories", [
      index("features/products/pages/categories-page.tsx"),
      route("/:category", "features/products/pages/category-page.tsx")
    ]),
    route("/search", "features/products/pages/search-page.tsx"),
    route("/submit", "features/products/pages/submit-page.tsx"),
    route("/promote", "features/products/pages/promote-page.tsx"),
    ...prefix("/:productId", [
      index("features/products/pages/product-redirection-page.tsx"),
      layout("features/products/layouts/product-layout.tsx", [
        route("/overview", "features/products/pages/product-overview-page.tsx"),
        ...prefix("/reviews", [
          index("features/products/pages/product-reviews-page.tsx")
        ])
      ])
    ])
  ]),
  ...prefix("ideas", [
    index("features/ideas/pages/ideas-page.tsx"),
    route("/:ideaId", "features/ideas/pages/idea-page.tsx")
  ]),
  ...prefix("jobs", [
    // layout("features/jobs/layout/jobs-layout.tsx", [
    index("features/jobs/pages/jobs-page.tsx"),
    route("/submit", "features/jobs/pages/submit-job-page.tsx"),
    route("/:jobId", "features/jobs/pages/job-page.tsx")
    // ])
  ]),
  ...prefix("teams", [
    index("features/teams/pages/teams-page.tsx"),
    route("/:team", "features/teams/pages/team-page.tsx"),
    route("create", "features/teams/pages/create-team-page.tsx")
  ]),
  ...prefix("community", [
    index("features/community/pages/comunity-page.tsx"),
    route("/:postId", "features/community/pages/post-page.tsx"),
    route("/new", "features/community/pages/create-post-page.tsx")
  ]),
  ...prefix("auth", [
    layout("features/auth/layouts/auth-layout.tsx", [
      route("/join", "features/auth/pages/join-page.tsx"),
      route("/login", "features/auth/pages/login-page.tsx"),
      ...prefix("/otp", [
        route("/start", "features/auth/pages/otp-start-page.tsx"),
        route("/complete", "features/auth/pages/otp-complete-page.tsx")
      ]),
      ...prefix("social/:provider", [
        route("/start", "features/auth/pages/social-start-page.tsx"),
        route("/complete", "features/auth/pages/social-complete-page.tsx")
      ])
    ])
  ])
] satisfies RouteConfig;
