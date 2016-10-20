import React from 'react';
import Breadcrumb from './Breadcrumb';
import renderer from 'react-test-renderer';

test('Breadcrumb is empty', () => {
  const component = renderer.create(
    <Breadcrumb crumbs={[]} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Breadcrumb with label only', () => {
  const component = renderer.create(
    <Breadcrumb crumbs={[{label:'blabla'}]} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Breadcrumb with label and link', () => {
  const component = renderer.create(
    <Breadcrumb crumbs={[{label:'blabla', link:'link_to_blabla'}]} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('Breadcrumb with several items', () => {
  const component = renderer.create(
    <Breadcrumb crumbs={[{label:'blabla', link:'link_to_blabla'}, {label:'blabla1', link:'link_to_blabla1'}, {label:'blabla2', link:'link_to_blabla2'}]} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
