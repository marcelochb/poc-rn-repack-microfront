import "reflect-metadata";
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { LoanListScreen } from ".";
import { IRepackComponent, IRepackMicrofront } from "@poc/interfaces";

function LoanListRepack(props:IRepackComponent):JSX.Element {
  const {theme, callBack} = props;
  return (
    <NavigationContainer>
      <LoanListScreen theme={theme} callBack={callBack}  />
    </NavigationContainer>
  )
}

export default LoanListRepack