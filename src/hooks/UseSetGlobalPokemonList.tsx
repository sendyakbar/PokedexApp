import {useEffect} from 'react';
import {useRecoilState} from 'recoil';

import useDataFetcher from './UseDataFetcher';
import {pokemonListState} from '../recoil/atoms';

export type ResultItem = {
  name: string;
  url: string;
};

export type ResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResultItem[];
};

const useSetGlobalPokemonList = (url: string) => {
  const {isLoading, response, error} = useDataFetcher(url);
  const [pokemonList, setPokemonList] =
    useRecoilState<ResponseType>(pokemonListState);

  useEffect(() => {
    setPokemonList(response);
  }, [setPokemonList, response]);

  return {
    isLoading,
    response: pokemonList,
    error,
  };
};

export default useSetGlobalPokemonList;
