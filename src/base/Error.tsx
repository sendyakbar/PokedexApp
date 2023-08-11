import React from 'react';
import {StyleSheet, View, ViewStyle, Text, TextStyle} from 'react-native';

export default function Error(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Opps, Error!</Text>
    </View>
  );
}

type StyleType = {
  container: ViewStyle;
  text: TextStyle;
};

const styles = StyleSheet.create<StyleType>({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 4,
  },
});
