import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

type Props = ViewStyle;

export default function Placeholder(props: Props): JSX.Element {
  const styles = styleGenerator(props);
  return <View style={styles.container} />;
}

type StyleType = {
  container: ViewStyle;
};

const styleGenerator = (payload: ViewStyle) =>
  StyleSheet.create<StyleType>({
    container: {
      ...payload,
      backgroundColor: '#EEEEEE',
      borderRadius: 4,
    },
  });
