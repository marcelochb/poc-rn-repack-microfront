import "reflect-metadata";
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import  {LoanDetailScreen}  from ".";
import { IRepackComponent } from "../../../packages/interfaces";
import { LoanEntity } from "../../../packages/core";

function LoanDetailRepack(props:IRepackComponent<LoanEntity>): JSX.Element {
  const {theme, data} = props;
  return (
    <NavigationContainer>
      <LoanDetailScreen theme={theme} data={data}/>
    </NavigationContainer>
  )
}
export default LoanDetailRepack;