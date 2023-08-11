import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Dimensions,
} from 'react-native';

const {width: DEVICE_WIDTH}: {width: number} = Dimensions.get('window');

type Props = {
  label: string;
  pics: string[];
};

export default function SpritesComponent(props: Props): JSX.Element {
  const {label, pics} = props;

  return (
    <>
      <Text style={styles.labelText}>{label}:</Text>
      <View style={styles.picsContainer}>
        {pics.map((item: string, index: number) => (
          <Image source={{uri: item}} style={styles.img} key={index} />
        ))}
      </View>
    </>
  );
}

type StyleType = {
  picsContainer: ViewStyle;
  img: ImageStyle;
  labelText: TextStyle;
};

const styles = StyleSheet.create<StyleType>({
  picsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img: {
    height: DEVICE_WIDTH / 4 - 8,
    width: DEVICE_WIDTH / 4 - 8,
  },
  labelText: {
    fontSize: 14,
    color: 'black',
    fontWeight: '700',
  },
});
