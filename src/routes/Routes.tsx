import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import FeaturePage from "../pages/FeaturePage/FeaturePage";
import PricingPage from "../pages/PricingPage/PricingPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/feature',
                element: <FeaturePage></FeaturePage>,
            },
            {
                path: '/pricing',
                element: <PricingPage></PricingPage>
            }
        ]
    },

])