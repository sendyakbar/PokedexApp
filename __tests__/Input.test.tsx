import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import Input from '../src/base/Input';

it('renders correctly', () => {
  const tree = renderer
    .create(<Input placeholder="Test" onChangeText={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
