import { ITheme } from "../../../packages/interfaces";
import { RouteProp } from "@react-navigation/native";

type ILoanListNavigationParams ={
  params: {
    theme: ITheme;
  }
}

export type ILoanListNavigationRoute = RouteProp<ILoanListNavigationParams, 'params'>;