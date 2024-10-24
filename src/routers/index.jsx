import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/About";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      }

    ]
  },
])