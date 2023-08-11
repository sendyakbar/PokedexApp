import React, {useEffect} from 'react';
import {Image, ImageStyle, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';

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
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 300});
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokemonListScreen"
        component={PokemonListScreen}
        options={{
          // title: 'Pokemon',
          headerTitle: HeaderLogo,
          headerTitleAlign: 'center',
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

function HeaderLogo(): JSX.Element {
  return (
    <Image
      source={require('../assets/images/pokemon_splash_icon.png')}
      style={styles.logo}
      resizeMode="contain"
    />
  );
}

type StyleType = {
  logo: ImageStyle;
};

const styles = StyleSheet.create<StyleType>({
  logo: {
    height: 60,
    width: 240,
  },
});
