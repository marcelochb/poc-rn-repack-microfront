import "reflect-metadata";
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { LoanListScreen } from ".";
import { IRepackComponent } from "../../../packages/interfaces";
import { LoanEntity } from "../../../packages/core";

function LoanListRepack(props:IRepackComponent<LoanEntity>):JSX.Element {
  const {theme, callBack, callBackBy} = props;
  return (
    <NavigationContainer>
      <LoanListScreen theme={theme} callBack={callBack} callBackBy={callBackBy}  />
    </NavigationContainer>
  )
}

export default LoanListRepack