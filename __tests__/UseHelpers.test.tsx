import 'react-native';
import {it} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';

import useHelpers from '../src/hooks/UseHelpers';

describe('UseHelpers Hook', () => {
  it('has function called typesFormatter that should return string of Pokemon types', () => {
    const {result} = renderHook(() => useHelpers());
    const {typesFormatter} = result.current;
    const types: string = typesFormatter([
      {type: {name: 'water', url: 'https://pokemon.com'}},
      {type: {name: 'fire', url: 'https://pokemon.com'}},
    ]);
    expect(types).toMatch('water, fire');
  });

  it('has function called movesFormatter that should return string of Pokemon moves', () => {
    const {result} = renderHook(() => useHelpers());
    const {movesFormatter} = result.current;
    const types: string = movesFormatter([
      {move: {name: 'hi', url: 'https://pokemon.com'}},
      {move: {name: 'ha', url: 'https://pokemon.com'}},
    ]);
    expect(types).toMatch('hi, ha');
  });

  it('has function called movesFormatter that should return string of Pokemon moves with maximum length of 10', () => {
    const {result} = renderHook(() => useHelpers());
    const {movesFormatter} = result.current;
    const types: string = movesFormatter([
      {move: {name: 'one', url: 'https://pokemon.com'}},
      {move: {name: 'two', url: 'https://pokemon.com'}},
      {move: {name: 'three', url: 'https://pokemon.com'}},
      {move: {name: 'four', url: 'https://pokemon.com'}},
      {move: {name: 'five', url: 'https://pokemon.com'}},
      {move: {name: 'six', url: 'https://pokemon.com'}},
      {move: {name: 'seven', url: 'https://pokemon.com'}},
      {move: {name: 'eight', url: 'https://pokemon.com'}},
      {move: {name: 'nine', url: 'https://pokemon.com'}},
      {move: {name: 'ten', url: 'https://pokemon.com'}},
      {move: {name: 'eleven', url: 'https://pokemon.com'}},
      {move: {name: 'twelve', url: 'https://pokemon.com'}},
      {move: {name: 'thirteen', url: 'https://pokemon.com'}},
    ]);
    expect(types).toMatch(
      'one, two, three, four, five, six, seven, eight, nine, ten',
    );
  });
});
