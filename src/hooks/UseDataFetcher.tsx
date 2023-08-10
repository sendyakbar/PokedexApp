import {useEffect, useState} from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

type StateType = {
  isLoading: boolean;
  response: any;
  error: '';
};

const useDataFetcher = (url: string) => {
  const [state, setState] = useState<StateType>({
    isLoading: true,
    response: {},
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

  return state;
};

export default useDataFetcher;
