import React from 'react';
import {StyleSheet, View, Text, ViewStyle, TextStyle} from 'react-native';

export default function Empty(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>Not found...</Text>
    </View>
  );
}

type StyleType = {
  container: ViewStyle;
  emptyText: TextStyle;
};

const styles = StyleSheet.create<StyleType>({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 12,
    color: 'grey',
    fontStyle: 'italic',
  },
});
