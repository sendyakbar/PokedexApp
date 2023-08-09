import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function PokemonListScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Halo Pokemon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
});
