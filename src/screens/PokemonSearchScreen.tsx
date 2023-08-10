import React, {useCallback} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ItemType} from './PokemonListScreen';
import PokemonCardComponent from '../components/PokemonCardComponent';
import useSearchPokemon from '../hooks/UseSearchPokemon';
import {ResultItem} from '../hooks/UseSetGlobalPokemonList';
import Input from '../base/Input';
import {RootStackParamList} from '../navigation/RootNavigator';

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
      return <PokemonCardComponent data={item} onPress={onPressItem(item)} />;
    },
    [onPressItem],
  );

  const renderEmpty = useCallback(() => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Not found...</Text>
      </View>
    );
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
  emptyContainer: ViewStyle;
  emptyText: TextStyle;
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
  emptyContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 12,
    color: 'grey',
    fontStyle: 'italic',
  },
});
