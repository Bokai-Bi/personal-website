import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./routes/home.tsx";
import Error from "./routes/error.tsx";
import Contact from "./routes/contact.tsx";
import KoishiError from "./routes/koishierror.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/koishi",
    element: <KoishiError />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
