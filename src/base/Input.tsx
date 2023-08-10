import React from 'react';
import {StyleSheet, View, TextInput, ViewStyle, TextStyle} from 'react-native';

type Props = {
  placeholder: string;
  onChangeText?: (input: string) => void;
  value?: string;
};

export default function Input(props: Props): JSX.Element {
  const {placeholder, onChangeText, value} = props;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.textInput}
      />
    </View>
  );
}

type StyleType = {
  container: ViewStyle;
  textInput: TextStyle;
};

const styles = StyleSheet.create<StyleType>({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  textInput: {
    fontSize: 12,
    color: 'grey',
    padding: 0,
  },
});
