import React from 'react';
import {StyleSheet, View, Text, ViewStyle, TextStyle} from 'react-native';

type Props = {
  label: string;
  value: string;
};

export default function InfoRow(props: Props): JSX.Element {
  const {label, value} = props;

  return (
    <View style={styles.container}>
      <View style={styles.labelCol}>
        <Text style={styles.labelText}>{label}</Text>
        <Text style={styles.labelText}>:</Text>
      </View>
      <View style={styles.valueCol}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  );
}

type StyleType = {
  container: ViewStyle;
  labelCol: ViewStyle;
  valueCol: ViewStyle;
  labelText: TextStyle;
  valueText: TextStyle;
};

const styles = StyleSheet.create<StyleType>({
  container: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  labelCol: {
    flex: 1,
    paddingLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueCol: {
    flex: 2,
    paddingHorizontal: 8,
  },
  labelText: {
    fontSize: 14,
    color: 'black',
    fontWeight: '700',
  },
  valueText: {
    fontSize: 14,
    color: 'grey',
    fontWeight: '500',
  },
});
