import React from 'react';
import { shallow } from 'enzyme';
import NameTag from './NameTag';

describe('NameTag component', () => {
  it('renders a NameTag', () => {
    const wrapper = shallow(<NameTag />);
    expect(wrapper).toMatchSnapshot();
  });
});
