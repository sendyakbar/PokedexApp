import {useState, useCallback} from 'react';
import axios from 'axios';
import {useRecoilState} from 'recoil';

import {pokemonListState} from '../recoil/atoms';
import {ResponseType} from './UseFetchData';

type StateType = {
  isNextLoading: boolean;
  error: string;
};

const useLoadMoreData = () => {
  const [, setPokemonList] = useRecoilState<ResponseType>(pokemonListState);
  const [state, setState] = useState<StateType>({
    isNextLoading: false,
    error: '',
  });

  const loadMore = useCallback(
    (nextUrl: string) => {
      setState(prevState => ({...prevState, isNextLoading: true}));
      axios
        .get(nextUrl)
        .then(({data}: {data: ResponseType}) => {
          setPokemonList(prevState => {
            return {
              ...prevState,
              results: [...prevState.results, ...data.results],
            };
          });
        })
        .catch(err => {
          setState(prevState => ({...prevState, error: err}));
        })
        .finally(() => {
          setState(prevState => ({...prevState, isNextLoading: false}));
        });
    },
    [setPokemonList],
  );

  return {loadMore, isNextLoading: state.isNextLoading};
};

export default useLoadMoreData;
