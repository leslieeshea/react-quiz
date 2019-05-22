import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('ColorSelector component', () => {
  it('renders a ColorSelector', () => {
    const wrapper = shallow(<ColorSelector color="red" backgroundColor="red" handleChange={() => <h1>hello</h1> } />);
    expect(wrapper).toMatchSnapshot();
  });
});
