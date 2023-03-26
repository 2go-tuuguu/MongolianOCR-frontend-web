import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/errorPage";
import About from "./routes/about";
import Create from "./routes/create";
import Explore from "./routes/explore";
import Profile from "./routes/profile";
import Longreads from "./routes/longreads";
import Worlds from "./routes/worlds";
import WorldPage from "./routes/worldPage";
import TimelinePage from "./routes/timelinePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/explore",
        element: <Explore />,
        children: [
          {
            path: "/explore/longreads",
            element: <Longreads />,
          },
          {
            path: "/explore/worlds",
            element: <Worlds />,
          },
        ],
      },
      {
        path: "/worlds/:worldId",
        element: <WorldPage />,
        children: [
          {
            path: "/worlds/:worldId/:timelineId",
            element: <TimelinePage />,
          },
        ],
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
