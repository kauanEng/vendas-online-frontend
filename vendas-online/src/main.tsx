import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { loginRoutes } from './modules/login/routes';

const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>TELA PRINCIPAL</div>,
    errorElement: <div>Página não encontrada!</div>
  },
];

const router = createBrowserRouter([...mainRoutes, ...loginRoutes]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
