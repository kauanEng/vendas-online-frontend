import FisrtScreen from ".";
import {
    RouteObject
} from "react-router-dom";

export enum FirstScreenRoutesEnum {
    FIRST_SCREEN = '/',
  }

  export const firstScreenRoutes: RouteObject[] = [
    {
      path: FirstScreenRoutesEnum.FIRST_SCREEN,
      element: <FisrtScreen />,
    },
  ];
