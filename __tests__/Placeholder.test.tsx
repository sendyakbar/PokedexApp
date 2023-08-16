import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import Placeholder from '../src/base/Placeholder';

it('renders correctly', () => {
  const tree = renderer
    .create(<Placeholder height={55} width="100%" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
