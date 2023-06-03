import { LoanEntity } from "../../../packages/core";
import { RouteProp } from "@react-navigation/native";

type ILoanDetailNavigationParams ={
  params: {
    data: LoanEntity;
  }
}

export type ILoanDetailNavigationRoute = RouteProp<ILoanDetailNavigationParams, 'params'>;