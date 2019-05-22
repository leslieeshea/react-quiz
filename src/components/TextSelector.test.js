import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector component', () => {
  it('renders a TextSelector', () => {
    const wrapper = shallow(<TextSelector text="hi" handleChange={() => <h1>hello</h1>} />);
    expect(wrapper).toMatchSnapshot();
  });
});
