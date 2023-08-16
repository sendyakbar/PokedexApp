import React, {Suspense, lazy, memo} from 'react';
import {
  StyleSheet,
  Text,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import Placeholder from '../base/Placeholder';

const Avatar = lazy(() => import('../base/Avatar'));

type Props = {
  data: {
    name: string;
    url: string;
  };
  onPress: () => void;
};

const PokemonCardComponent = memo((props: Props): JSX.Element => {
  const {data, onPress} = props;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Suspense
        fallback={<Placeholder height={36} width={36} borderRadius={100} />}>
        <Avatar />
      </Suspense>
      <Text style={styles.itemNameText}>{data.name}</Text>
    </TouchableOpacity>
  );
});

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

export default PokemonCardComponent;
