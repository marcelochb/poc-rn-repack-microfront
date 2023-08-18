import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { screens } from '../screens';
import { IRepackComponent } from '../../packages/interfaces';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
    {
      screens.map(screen => (
        <Stack.Screen key={screen.name} navigationKey={screen.name}
          name={screen.name}
          component={screen.component}
          options={{title: screen.title}}
          initialParams={{data: 'teste'}}
        />
      ))
    }
  </Stack.Navigator>
)
export default Routes;