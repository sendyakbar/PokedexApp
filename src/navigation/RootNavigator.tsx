import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonListScreen from '../screens/PokemonListScreen';

export type RootStackParamList = {
  PokemonListScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokemonListScreen"
        component={PokemonListScreen}
        options={{
          title: 'Pokemon',
        }}
      />
    </Stack.Navigator>
  );
}
