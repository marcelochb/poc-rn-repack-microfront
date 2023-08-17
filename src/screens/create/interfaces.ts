import { ITheme } from "../../../packages/interfaces";
import { RouteProp } from "@react-navigation/native";

type ILoanCreateNavigationParams ={
  params: {
    theme: ITheme;
  }
}

export type ILoanCreateNavigationRoute = RouteProp<ILoanCreateNavigationParams, 'params'>;