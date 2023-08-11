import {useCallback} from 'react';

export type ItemTypesType = {
  type: {
    name: string;
    url: string;
  };
};

type ItemMovesType = {
  move: {
    name: string;
    url: string;
  };
};

const useHelpers = () => {
  const typesFormatter = useCallback((types: ItemTypesType[]) => {
    const remapType: string[] = types.map(
      (item: ItemTypesType) => item.type.name,
    );
    return remapType.join(', ');
  }, []);

  const movesFormatter = useCallback((moves: ItemMovesType[]) => {
    const remapMoves: string[] = moves.map(
      (item: ItemMovesType) => item.move.name,
    );
    const slicedMoves = remapMoves.slice(0, 10);
    return slicedMoves.join(', ');
  }, []);

  return {typesFormatter, movesFormatter};
};

export default useHelpers;
