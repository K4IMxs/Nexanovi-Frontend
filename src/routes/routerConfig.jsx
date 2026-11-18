/**sessão de rotas publicas*/
import { AuthenticatedLayout } from "../components/AuthenticatedLayout";
import { PublicLayout } from "../components/PublicLayout";
import { RouterErrorBoundary } from "../components/RouterErrorBounday";
import { AnalyticsPage } from "../Pages/AnalyticsPage";

import { RegisterPage } from "../Pages/Register";
import { DashboardPage } from "../Pages/DashboardPage";
import { LandingPage } from "../Pages/LandingPage";
import { LoginPage } from "../Pages/LoginPage";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { RecoverPasswordPage } from "../Pages/RecoverPasswordPage";
import { About } from '../Pages/About';
import { TaskPage } from '../Pages/TaskPage'
import { CampaignsPage } from '../Pages/CampaignsPage'
import { StoreProfilePage } from '../Pages/StoreProfilePage'
import { MarketplacePage } from '../Pages/MarketplacePage'
import { DonationsPage } from '../Pages/DonationsPage'
import { CartPage } from '../Pages/CartPage'

import { RequireAuth } from "./guards/RequireAuth";

const routerConfig = [
    {
        element: <PublicLayout />,
        errorElement: <RouterErrorBoundary />,
        children:[
            {path: "/", element: <LandingPage />},
            {path: "/login", element: <LoginPage />},
            {path: "/register", element: <RegisterPage />},
            {path: "/about", element: <MarketplacePage /> },
            {path: "/marketplace", element: <MarketplacePage /> },
            {path: "/donations", element: <DonationsPage /> },
            {path: "/cart", element: <CartPage /> },
            {path: "RecoverPassword", element: <RecoverPasswordPage />},
            {path: "*", element: <NotFoundPage />},
        ]
     },
    {
        element: <RequireAuth />,
        errorElement: <RouterErrorBoundary />,
        children: [
            {
            element: <AuthenticatedLayout />,
            children: [
              {path: '/dashboard', element: <DashboardPage /> },
              {path: '/tasks', element: <TaskPage /> },
              {path: '/analytics', element: <AnalyticsPage /> },
              {path: '/campaigns', element: <CampaignsPage /> },
              {path: '/profile', element: <StoreProfilePage /> },
            ],
          },
        ],
      },
    ]

export {routerConfig}