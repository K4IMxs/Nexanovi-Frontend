import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { routerConfig } from './routerConfig'

const router =createBrowserRouter(routerConfig)

function AppRoutes() {
    return<RouterProvider router={router}/>
} export {AppRoutes}