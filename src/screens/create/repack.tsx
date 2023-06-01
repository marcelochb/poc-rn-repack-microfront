import "reflect-metadata";
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { LoanCreateScreen } from ".";
import { IRepackComponent } from "../../../packages/interfaces";

function LoanCreateRepack(props:IRepackComponent): JSX.Element {
  const {theme, callBack} = props;
  return (
    <NavigationContainer>
      <LoanCreateScreen theme={theme} callBack={callBack} />
    </NavigationContainer>
  )
}
export default LoanCreateRepack;