import {useState, useEffect} from 'react';
import axios from 'axios';
import {useRecoilState} from 'recoil';

import {pokemonListState} from '../recoil/atoms';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

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

type StateType = {
  isLoading: boolean;
  error: string;
};

const useFetchData = (url: string) => {
  const [pokemonList, setPokemonList] =
    useRecoilState<ResponseType>(pokemonListState);
  const [state, setState] = useState<StateType>({
    isLoading: true,
    error: '',
  });

  useEffect(() => {
    function fetchData(): void {
      axios
        .get(url)
        .then(({data}) => {
          setPokemonList(data);
        })
        .catch(err => {
          setState(prevState => ({...prevState, error: err}));
        })
        .finally(() => {
          setState(prevState => ({...prevState, isLoading: false}));
        });
    }
    fetchData();
  }, [url, setPokemonList]);

  return {
    isLoading: state.isLoading,
    response: pokemonList,
    error: state.error,
  };
};

export default useFetchData;
