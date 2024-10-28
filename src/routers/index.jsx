import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/About";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Index";
import Blog from "../pages/blogs/Index";
import SinglePost from "../pages/blogs/_id";
import { postById, posts } from "../apis/loader";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/blogs',
        element: <Blog />,
        loader: posts
      },
      {
        path: '/blogs/:id',
        element: <SinglePost />,
        loader: postById
      }
    ]
  },
])