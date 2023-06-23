import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { loginRoutes } from './modules/login/routes';
import { useNotification } from "./share/hooks/useNotification";
import { productScreen } from "./modules/product/routes";
import { useGlobalContext } from "./share/hooks/useGlobalContext";
import { verifyLoggedIn } from "./share/functions/connection/auth";
import { firstScreenRoutes } from "./modules/firstScreen/routes";


function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();

  const routes: RouteObject[] = [...loginRoutes]
  const routesLoggedIn: RouteObject[] = [...productScreen, ...firstScreenRoutes].map((route) => ({
    ...route,
    loader: () => verifyLoggedIn(setUser, user),
  }));

  const router = createBrowserRouter([
    ...routes,
    ...routesLoggedIn
  ]);


  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  )
}

export default App
