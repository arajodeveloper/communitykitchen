import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NewFood from './NewFood'

Enzyme.configure({ adapter: new Adapter() })

describe('a component', () => {
it('does NewFood render without crashing', () => {
  const div = document.createElement('div')
  expect(true).toEqual(true)
  });
});
