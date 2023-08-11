import {useEffect, useState} from 'react';
import useDataFetcher from './UseDataFetcher';

const useFetchEvoChain = (pokemonId: number) => {
  const {response} = useDataFetcher(`/evolution-chain/${pokemonId}`);
  const [formattedEvoChain, setFormattedEvoChain] = useState<string>('');

  useEffect(() => {
    if (response.chain) {
      let evoChain = [];
      let evoData = response.chain;
      while (!!evoData && evoData.hasOwnProperty('evolves_to')) {
        evoChain.push(evoData.species.name);
        evoData = evoData.evolves_to[0];
      }
      setFormattedEvoChain(evoChain.join(', '));
    }
  }, [response]);

  return {formattedEvoChain};
};

export default useFetchEvoChain;
