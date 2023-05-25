import { IMicrofont } from "@poc/interfaces";
import { NAVIGATOR_CONSTANTS } from "./constants";
import { Routes } from "./routes";
import { screens } from "./screens";

export const LoanStack:IMicrofont = {
  stack: {
    component: Routes,
    name: NAVIGATOR_CONSTANTS.STACK_NAME,
    title: NAVIGATOR_CONSTANTS.STACK_TITLE,
  },
  initialRoute: NAVIGATOR_CONSTANTS.LIST_SCREEN_NAME,
  screens
}
