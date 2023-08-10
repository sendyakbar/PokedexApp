import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  ViewStyle,
  TouchableOpacity,
  ImageStyle,
  TextStyle,
} from 'react-native';

type Props = {
  data: {
    name: string;
    url: string;
  };
  onPress: () => void;
};

export default function PokemonCardComponent(props: Props) {
  const {data, onPress} = props;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Image
        source={require('../assets/images/pokeball.png')}
        style={styles.pokeball}
      />
      <Text style={styles.itemNameText}>{data.name}</Text>
    </TouchableOpacity>
  );
}

type StyleType = {
  container: ViewStyle;
  pokeball: ImageStyle;
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
  pokeball: {
    height: 36,
    width: 36,
  },
  itemNameText: {
    marginLeft: 8,
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
  },
});
