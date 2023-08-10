import React from 'react';
import {
  StyleSheet,
  Text,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import Avatar from '../base/Avatar';

type Props = {
  data: {
    name: string;
    url: string;
  };
  onPress: () => void;
};

export default function PokemonCardComponent(props: Props): JSX.Element {
  const {data, onPress} = props;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Avatar />
      <Text style={styles.itemNameText}>{data.name}</Text>
    </TouchableOpacity>
  );
}

type StyleType = {
  container: ViewStyle;
  itemNameText: TextStyle;
};

const styles = StyleSheet.create<StyleType>({
  container: {
    width: '49%',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
  },
  itemNameText: {
    marginLeft: 8,
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
});
