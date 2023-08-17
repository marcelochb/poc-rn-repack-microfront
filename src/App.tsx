import "reflect-metadata";
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './routes';
import { ThemeBase } from "../packages/theme";
function App(): JSX.Element {
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Routes theme={ThemeBase.Midway} />
        </NavigationContainer>
      </SafeAreaProvider>
  );
};

export default App;
