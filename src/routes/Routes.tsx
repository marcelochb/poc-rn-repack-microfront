import "reflect-metadata";
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { screens } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { LoanListScreen } from "../screens/list";
// import LoanListScreen from "../screens/list/LoanListScreen";

const Stack = createStackNavigator();

const LocalStack = () => { 
  return (
  <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
    {/* {
      screens.map(screen => ( */}
        <Stack.Screen key={'fsdfs'} navigationKey={'fsdfs'}
          name={'fsdfs'}
          component={LoanListScreen}
          options={{title: 'screen.title'}}
        />
      {/* ))
    } */}
  </Stack.Navigator>
  )
}
function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <LocalStack />
    </NavigationContainer>
  )
}
export default Routes;