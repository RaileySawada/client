import { createBrowserRouter } from "react-router";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
]);
