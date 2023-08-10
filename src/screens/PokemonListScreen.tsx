import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import useFetchData, {ResultItem} from '../hooks/UseFetchData';
import PokemonCardComponent from '../components/PokemonCardComponent';

type ItemType = {
  item: ResultItem;
};

export default function PokemonListScreen(): JSX.Element {
  const {isLoading, response, error, loadMore, isNextLoading} =
    useFetchData('/pokemon?limit=8');

  const onPressItem = useCallback(() => {}, []);

  const onEndReached = useCallback(() => {
    loadMore(response.next || '');
  }, [loadMore, response.next]);

  const renderFooter = useCallback(() => {
    if (isNextLoading) {
      return (
        <View style={styles.footerContainer}>
          <ActivityIndicator size="large" color="black" />
          <Text style={styles.errorText}>Loading...</Text>
        </View>
      );
    }
    return null;
  }, [isNextLoading]);

  const renderItem = useCallback(
    ({item}: ItemType) => {
      return <PokemonCardComponent data={item} onPress={onPressItem} />;
    },
    [onPressItem],
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="black" />
        <Text style={styles.errorText}>Loading...</Text>
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
      onEndReached={onEndReached}
      onEndReachedThreshold={0.3}
      ListFooterComponent={renderFooter}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingVertical: 16,
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
    backgroundColor: 'white',
  },
  errorText: {
    color: 'grey',
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 4,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
