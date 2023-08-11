import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

export default function Separator(): JSX.Element {
  return <View style={styles.container} />;
}

type StyleType = {
  container: ViewStyle;
};

const styles = StyleSheet.create<StyleType>({
  container: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#dddddd',
    borderRadius: 100,
  },
});
