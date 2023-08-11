import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
};

export default function Button(props: Props): JSX.Element {
  const {onPress, title} = props;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
}

type StyleType = {
  container: ViewStyle;
  titleText: TextStyle;
};

const styles = StyleSheet.create<StyleType>({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  titleText: {
    fontSize: 12,
    color: 'grey',
  },
});
