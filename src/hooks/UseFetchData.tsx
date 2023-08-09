import {useState, useEffect} from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export type ResultItem = {
  name: string;
  url: string;
};

type StateType = {
  isLoading: boolean;
  response: {
    count: number;
    next: string | null;
    previous: string | null;
    results: ResultItem[];
  };
  error: string;
};

const useFetchData = (url: string) => {
  const [state, setState] = useState<StateType>({
    isLoading: true,
    response: {
      count: 0,
      next: null,
      previous: null,
      results: [],
    },
    error: '',
  });

  useEffect(() => {
    function fetchData(): void {
      axios
        .get(url)
        .then(({data}) => {
          setState(prevState => ({...prevState, response: data}));
        })
        .catch(err => {
          setState(prevState => ({...prevState, error: err}));
        })
        .finally(() => {
          setState(prevState => ({...prevState, isLoading: false}));
        });
    }
    fetchData();
  }, [url]);

  return {
    isLoading: state.isLoading,
    response: state.response,
    error: state.error,
  };
};

export default useFetchData;
