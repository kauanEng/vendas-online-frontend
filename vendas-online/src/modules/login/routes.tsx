import LoginScreen from ".";
import {
    RouteObject
} from "react-router-dom";

export const loginRoutes: RouteObject[] = [
    {
        path: "/login",
        element: <LoginScreen />,
    },
];
