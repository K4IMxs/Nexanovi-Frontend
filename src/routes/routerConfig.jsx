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

import { RequireAuth } from "./guards/RequireAuth";

const routerConfig = [
    {
        element: <PublicLayout />,
        errorElement: <RouterErrorBoundary />,
        children:[
            {path: "/", element: <LandingPage />},
            {path: "/login", element: <LoginPage />},
            {path: "/register", element: <RegisterPage />},
            {path: "/about", element: <About /> },    
            {path: "RecoverPassword", element: <RecoverPasswordPage />},
            {path: "*", element: <NotFoundPage />},
        ]
     },
    {
        Element: <RequireAuth />,
        errorElement: <RouterErrorBoundary />,
        children: [
            {
            element: <AuthenticatedLayout />,
            children: [
              {path: '/dashboard', element: <DashboardPage /> },
              {path: '/tasks', element: <TaskPage /> },
              {path: '/analytics', element: <AnalyticsPage /> },
            ],
          },
        ],
      },
    ]

export {routerConfig}