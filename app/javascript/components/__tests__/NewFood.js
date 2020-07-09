import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NewFood from '../NewFood'

Enzyme.configure({ adapter: new Adapter() })

// let wrapper;
// beforeEach(() => {
// });

describe('<NewFood /> rendering', () => {
it('should render one <Form>', () => {
  const wrapper = mount(<NewFood />);
        expect(wrapper.find('form')).toHaveLength(1);
    });
it('should render 3 <div>s', () => {
  const wrapper = shallow(<NewFood />);
        expect(wrapper.find('div')).toHaveLength(3);
    });
it('should render 5 <label>s', () => {
  const wrapper = shallow(<NewFood />);
        expect(wrapper.find('label')).toHaveLength(5);
    });
});
