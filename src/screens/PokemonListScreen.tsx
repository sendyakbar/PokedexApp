import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import PokemonCardComponent from '../components/PokemonCardComponent';
import useSetGlobalPokemonList, {
  ResultItem,
} from '../hooks/UseSetGlobalPokemonList';
import useLoadMoreData from '../hooks/UseLoadMoreData';
import {RootStackParamList} from '../navigation/RootNavigator';
import Loading from '../base/Loading';
import Error from '../base/Error';

export type ItemType = {
  item: ResultItem;
};

type Props = NativeStackScreenProps<RootStackParamList, 'PokemonListScreen'>;

export default function PokemonListScreen({navigation}: Props): JSX.Element {
  const {isLoading, response, error} =
    useSetGlobalPokemonList('/pokemon?limit=8');
  const {loadMore, isNextLoading} = useLoadMoreData();

  const onPressSearch = useCallback(() => {
    navigation.navigate('PokemonSearchScreen');
  }, [navigation]);

  const onPressItem = useCallback(
    (item: ResultItem) => () => {
      navigation.navigate('PokemonDetailScreen', {
        url: item.url,
        name: item.name,
      });
    },
    [navigation],
  );

  const onEndReached = useCallback(() => {
    loadMore(response.next || '');
  }, [loadMore, response.next]);

  const renderHeader = useCallback(() => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.searchButton}
          activeOpacity={0.8}
          onPress={onPressSearch}>
          <Text style={styles.searchText}>Search Pokemon...</Text>
        </TouchableOpacity>
      </View>
    );
  }, [onPressSearch]);

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
      return <PokemonCardComponent data={item} onPress={onPressItem(item)} />;
    },
    [onPressItem],
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
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
      ListHeaderComponent={renderHeader}
    />
  );
}

type StyleType = {
  container: ViewStyle;
  columnWrapper: ViewStyle;
  loadingContainer: ViewStyle;
  errorText: TextStyle;
  footerContainer: ViewStyle;
  headerContainer: ViewStyle;
  searchText: TextStyle;
  searchButton: ViewStyle;
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
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: 'white',
  },
  searchText: {
    fontSize: 12,
    color: 'grey',
  },
  searchButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
});
