import React, { useEffect } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './components/navigator/stack-navigator';
import { StatusBar } from 'react-native';
import linking from './linking';


const App = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('transparent')
    StatusBar.setBarStyle('dark-content')
  }, [])

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer linking={linking}>
          <StatusBar />
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

export default App
