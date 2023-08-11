import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ViewStyle,
  Text,
  TextStyle,
} from 'react-native';

export default function Loading(): JSX.Element {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
      <Text style={styles.text}>Loading...</Text>
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
