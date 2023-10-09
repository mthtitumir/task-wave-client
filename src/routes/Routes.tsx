import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import FeaturePage from "../pages/FeaturePage/FeaturePage";
import PricingPage from "../pages/PricingPage/PricingPage";
import Test from "../components/test";
import HomePage from "../pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path : "/",
        element : <HomePage/>
      },
      {
        path: "/feature",
        element: <FeaturePage></FeaturePage>,
      },
      {
        path: "/pricing",
        element: <PricingPage></PricingPage>,
      },
    ],
  },
  {
    path: "/test",
    element: <Test></Test>,
  },
]);
