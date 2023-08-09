import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import useFetchData, {ResultItem} from '../hooks/UseFetchData';

type ItemType = {
  item: ResultItem;
};

export default function PokemonListScreen(): JSX.Element {
  const {isLoading, response, error} = useFetchData('/pokemon?limit=8');

  const onPressItem = useCallback(() => {}, []);

  const renderItem = useCallback(
    ({item}: ItemType) => {
      return (
        <TouchableOpacity
          style={styles.itemContainer}
          activeOpacity={0.8}
          onPress={onPressItem}>
          <Image
            source={require('../assets/images/pokeball.png')}
            style={styles.pokeball}
          />
          <Text style={styles.itemNameText}>{item.name}</Text>
        </TouchableOpacity>
      );
    },
    [onPressItem],
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Oops.. error</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={response.results}
      renderItem={renderItem}
      keyExtractor={(_, i) => String(i)}
      contentContainerStyle={styles.container}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingVertical: 16,
  },
  itemContainer: {
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
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  errorText: {
    color: 'grey',
    fontSize: 12,
    fontStyle: 'italic',
  },
});
