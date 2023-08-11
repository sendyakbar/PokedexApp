import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import InfoRow from '../src/base/InfoRow';

it('renders correctly', () => {
  const tree = renderer
    .create(<InfoRow label="Label" value="Value" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
