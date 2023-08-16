import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import Empty from '../src/base/Empty';

it('renders correctly', () => {
  const tree = renderer.create(<Empty />).toJSON();
  expect(tree).toMatchSnapshot();
});
