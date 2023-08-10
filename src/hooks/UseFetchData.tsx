import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export type ResultItem = {
  name: string;
  url: string;
};

type ResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResultItem[];
};

type StateType = {
  isLoading: boolean;
  isNextLoading: boolean;
  response: ResponseType;
  error: string;
};

const useFetchData = (url: string) => {
  const [state, setState] = useState<StateType>({
    isLoading: true,
    isNextLoading: false,
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

  const loadMore = useCallback((nextUrl: string) => {
    setState(prevState => ({...prevState, isNextLoading: true}));
    axios
      .get(nextUrl)
      .then(({data}: {data: ResponseType}) => {
        setState(prevState => {
          return {
            ...prevState,
            response: {
              ...data,
              results: [...prevState.response.results, ...data.results],
            },
          };
        });
      })
      .catch(err => {
        setState(prevState => ({...prevState, error: err}));
      })
      .finally(() => {
        setState(prevState => ({...prevState, isNextLoading: false}));
      });
  }, []);

  return {
    isLoading: state.isLoading,
    isNextLoading: state.isNextLoading,
    response: state.response,
    error: state.error,
    loadMore,
  };
};

export default useFetchData;
