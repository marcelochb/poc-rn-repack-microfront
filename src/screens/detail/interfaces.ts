import { ITheme } from "@poc/interfaces";
import { LoanEntity } from "../../../packages/core";
import { RouteProp } from "@react-navigation/native";

type ILoanDetailNavigationParams ={
  params: {
    data: LoanEntity;
    theme: ITheme;
  }
}

export type ILoanDetailNavigationRoute = RouteProp<ILoanDetailNavigationParams, 'params'>;