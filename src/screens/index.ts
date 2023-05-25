import { IScreen } from "@poc/interfaces";
import { NAVIGATOR_CONSTANTS } from "../constants";
import { LoanCreateScreen } from "./create";
import { LoanDetailScreen } from "./detail";
import { LoanListScreen } from "./list";

export const screens:IScreen[] = [
  {
    component: LoanListScreen,
    name: NAVIGATOR_CONSTANTS.LIST_SCREEN_NAME,
    title: NAVIGATOR_CONSTANTS.LIST_SCREEN_TITLE
  },
  {
    component: LoanDetailScreen,
    name: NAVIGATOR_CONSTANTS.DETAIL_SCREEN_NAME,
    title: NAVIGATOR_CONSTANTS.DETAIL_SCREEN_TITLE
  },
  {
    component: LoanCreateScreen,
    name: NAVIGATOR_CONSTANTS.CREATE_SCREEN_NAME,
    title: NAVIGATOR_CONSTANTS.CREATE_SCREEN_TITLE
  }
]