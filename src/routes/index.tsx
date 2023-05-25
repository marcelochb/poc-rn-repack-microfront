import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { screens } from '../screens';

const Stack = createStackNavigator();

export const Routes = () => (
  <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
    {
      screens.map(screen => (
        <Stack.Screen 
          name={screen.name}
          component={screen.component}
          options={{title: screen.title}}
        />
      ))
    }
  </Stack.Navigator>
)
