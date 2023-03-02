import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import Protected from "./components/protected";
import "./index.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Logout from "./pages/logout";
import { routes } from "./routes";

const router = createBrowserRouter([
  {
    path: routes.home.href,
    element: <App />,
    children: [
      {
        element: <Protected />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      {
        path: routes.login.href,
        element: <Login />,
      },
      {
        path: routes.logout.href,
        element: <Logout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
