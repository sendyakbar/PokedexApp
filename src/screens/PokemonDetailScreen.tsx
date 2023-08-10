import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, Text, ViewStyle} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'PokemonDetailScreen'>;

export default function PokemonDetailScreen({
  navigation,
  route,
}: Props): JSX.Element {
  const {name} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Text>Halo</Text>
    </View>
  );
}

type StyleType = {
  container: ViewStyle;
};

const styles = StyleSheet.create<StyleType>({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 16,
  },
});
