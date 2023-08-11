import React, {useLayoutEffect, useEffect, useState} from 'react';
import {StyleSheet, ViewStyle, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../navigation/RootNavigator';
import Loading from '../base/Loading';
import useDataFetcher from '../hooks/UseDataFetcher';
import useHelpers from '../hooks/UseHelpers';
import useFetchEvoChain from '../hooks/UseFetchEvoChain';
import DetailBoxComponent from '../components/DetailBoxComponent';
import SpritesComponent from '../components/SpritesComponent';

type Props = NativeStackScreenProps<RootStackParamList, 'PokemonDetailScreen'>;

export default function PokemonDetailScreen({
  navigation,
  route,
}: Props): JSX.Element {
  const {name, url} = route.params;
  const {isLoading, response} = useDataFetcher(url);
  const {typesFormatter, movesFormatter} = useHelpers();
  const {formattedEvoChain} = useFetchEvoChain(response.id);
  const [pics, setPics] = useState<string[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  useEffect(() => {
    if (response.sprites) {
      const spritesList: string[] = Object.values(response.sprites);
      const filterSprites: string[] = spritesList.filter(
        (uri: unknown) => typeof uri === 'string',
      );
      setPics(filterSprites);
    }
  }, [response]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SpritesComponent label="Sprites" pics={pics} />
      <DetailBoxComponent
        data={[
          {label: 'Height', value: response.height},
          {label: 'Weight', value: response.weight},
          {label: 'Types', value: typesFormatter(response.types)},
          {label: 'Evo Chain', value: formattedEvoChain},
          {label: 'Moves', value: movesFormatter(response.moves)},
        ]}
      />
    </ScrollView>
  );
}

type StyleType = {
  container: ViewStyle;
};

const styles = StyleSheet.create<StyleType>({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 16,
  },
});
