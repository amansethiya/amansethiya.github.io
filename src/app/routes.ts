import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
  {
    path: "/services/:serviceId",
    Component: ServiceDetailPage,
  },
]);