import React from 'react';
import PleaseWait from './PleaseWait';
import renderer from 'react-test-renderer';

test('PleaseWait', () => {
  const component = renderer.create(
    <PleaseWait />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});