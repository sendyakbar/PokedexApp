import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonListScreen from '../screens/PokemonListScreen';
import PokemonSearchScreen from '../screens/PokemonSearchScreen';

export type RootStackParamList = {
  PokemonListScreen: undefined;
  PokemonSearchScreen: undefined;
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
      <Stack.Screen
        name="PokemonSearchScreen"
        component={PokemonSearchScreen}
        options={{
          title: 'Search',
        }}
      />
    </Stack.Navigator>
  );
}
