import {atom} from 'recoil';
import {ResponseType} from '../hooks/UseFetchData';

export const pokemonListState = atom<ResponseType>({
  key: 'pokemonListState',
  default: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
});
