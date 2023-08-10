import React from 'react';
import {StyleSheet, Image, ImageStyle} from 'react-native';

export default function Avatar(): JSX.Element {
  return (
    <Image
      source={require('../assets/images/pokeball.png')}
      style={styles.pokeball}
    />
  );
}

type StyleType = {
  pokeball: ImageStyle;
};

const styles = StyleSheet.create<StyleType>({
  pokeball: {
    height: 36,
    width: 36,
  },
});
