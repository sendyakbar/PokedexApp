import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import SpritesComponent from '../src/components/SpritesComponent';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <SpritesComponent
        label="Test"
        pics={[
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png',
        ]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
