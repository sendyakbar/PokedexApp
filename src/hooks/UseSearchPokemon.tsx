import {useCallback, useState} from 'react';
import {useRecoilValue} from 'recoil';

import {ResponseType, ResultItem} from './UseFetchData';
import {pokemonListState} from '../recoil/atoms';

const useSearchPokemon = () => {
  const pokemonList = useRecoilValue<ResponseType>(pokemonListState);
  const [filteredList, setFilteredList] = useState<ResultItem[]>(
    pokemonList.results,
  );

  const searchPokemon = useCallback(
    (input: string) => {
      const baseList = [...pokemonList.results];

      const filterDataByInput = baseList.filter((item: ResultItem) =>
        item.name.includes(input),
      );

      setFilteredList(filterDataByInput);
    },
    [pokemonList.results, setFilteredList],
  );

  return {searchPokemon, filteredList};
};

export default useSearchPokemon;
