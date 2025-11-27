// router.tsx
import {
  RouterProvider,
  Router,
  RootRoute,
  Route,
} from "@tanstack/react-router"

import Layout from "./Layout"
import Home from "./page/home.page"
import Product from "./page/product.page"

const rootRoute = new RootRoute({
  component: Layout,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
})

const productRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: Product,
})

const routeTree = rootRoute.addChildren([indexRoute, productRoute])

export const router = new Router({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

export function AppRouter() {
  return <RouterProvider router={router} />
}
