import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import DetailBoxComponent from '../src/components/DetailBoxComponent';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <DetailBoxComponent
        data={[
          {label: 'Test', value: 'Success'},
          {label: 'Test2', value: 'Success2'},
        ]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
