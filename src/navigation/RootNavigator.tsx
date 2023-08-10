import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonListScreen from '../screens/PokemonListScreen';
import PokemonSearchScreen from '../screens/PokemonSearchScreen';
import PokemonDetailScreen from '../screens/PokemonDetailScreen';

export type RootStackParamList = {
  PokemonListScreen: undefined;
  PokemonSearchScreen: undefined;
  PokemonDetailScreen: {
    url: string;
    name: string;
  };
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
      <Stack.Screen
        name="PokemonDetailScreen"
        component={PokemonDetailScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
}
