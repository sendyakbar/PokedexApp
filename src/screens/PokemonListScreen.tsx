import React, {Suspense, lazy, useCallback} from 'react';
import {StyleSheet, View, FlatList, ViewStyle} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import useSetGlobalPokemonList, {
  ResultItem,
} from '../hooks/UseSetGlobalPokemonList';
import useLoadMoreData from '../hooks/UseLoadMoreData';
import {RootStackParamList} from '../navigation/RootNavigator';

const PokemonCardComponent = lazy(
  () => import('../components/PokemonCardComponent'),
);

import Loading from '../base/Loading';
import Error from '../base/Error';
import Button from '../base/Button';
import Placeholder from '../base/Placeholder';

export type ItemType = {
  item: ResultItem;
};

type Props = NativeStackScreenProps<RootStackParamList, 'PokemonListScreen'>;

export default function PokemonListScreen({navigation}: Props): JSX.Element {
  const {isLoading, response, error} =
    useSetGlobalPokemonList('/pokemon?limit=20');
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
        <Button title="Search Pokemon..." onPress={onPressSearch} />
      </View>
    );
  }, [onPressSearch]);

  const renderFooter = useCallback(() => {
    if (isNextLoading) {
      return (
        <View style={styles.footerContainer}>
          <Loading />
        </View>
      );
    }
    return null;
  }, [isNextLoading]);

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
  footerContainer: ViewStyle;
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
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    height: 120,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: 'white',
  },
});
