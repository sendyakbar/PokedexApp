import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import PokemonCardComponent from '../src/components/PokemonCardComponent';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <PokemonCardComponent
        data={{name: 'Pokemon', url: 'https://pokemon.com'}}
        onPress={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
