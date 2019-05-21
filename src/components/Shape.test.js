import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape component', () => {
  it('renders a Shape', () => {
    const wrapper = shallow(<Shape text="hi" color="#FF0000" backgroundColor="#FF0000" />);
    expect(wrapper).toMatchSnapshot();
  });
});
