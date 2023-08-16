import React, {useCallback, lazy, Suspense} from 'react';
import {StyleSheet, FlatList, View, ViewStyle} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ItemType} from './PokemonListScreen';
import {RootStackParamList} from '../navigation/RootNavigator';
import useSearchPokemon from '../hooks/UseSearchPokemon';
import {ResultItem} from '../hooks/UseSetGlobalPokemonList';

const PokemonCardComponent = lazy(
  () => import('../components/PokemonCardComponent'),
);
import Input from '../base/Input';
import Empty from '../base/Empty';
import Placeholder from '../base/Placeholder';

type Props = NativeStackScreenProps<RootStackParamList, 'PokemonSearchScreen'>;

export default function PokemonSearchScreen({navigation}: Props): JSX.Element {
  const {filteredList, searchPokemon} = useSearchPokemon();

  const onPressItem = useCallback(
    (item: ResultItem) => () => {
      navigation.navigate('PokemonDetailScreen', {
        url: item.url,
        name: item.name,
      });
    },
    [navigation],
  );

  const onSearch = useCallback(
    (input: string) => {
      searchPokemon(input);
    },
    [searchPokemon],
  );

  const renderItem = useCallback(
    ({item}: ItemType) => {
      return (
        <Suspense fallback={<Placeholder height={55} width="49%" />}>
          <PokemonCardComponent data={item} onPress={onPressItem(item)} />
        </Suspense>
      );
    },
    [onPressItem],
  );

  const renderEmpty = useCallback(() => {
    return <Empty />;
  }, []);

  return (
    <>
      <View style={styles.headerContainer}>
        <Input placeholder="Pikachu" onChangeText={onSearch} />
      </View>
      <FlatList
        data={filteredList}
        renderItem={renderItem}
        keyExtractor={(_, i) => String(i)}
        contentContainerStyle={styles.container}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ListEmptyComponent={renderEmpty}
      />
    </>
  );
}

type StyleType = {
  container: ViewStyle;
  columnWrapper: ViewStyle;
  headerContainer: ViewStyle;
};

const styles = StyleSheet.create<StyleType>({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingBottom: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
});
