import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';

import RootNavigator from './src/navigation/RootNavigator';

export default function App(): JSX.Element {
  return (
    <RecoilRoot>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}
