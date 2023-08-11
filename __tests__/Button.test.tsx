import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import Button from '../src/base/Button';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button title="Title" onPress={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
