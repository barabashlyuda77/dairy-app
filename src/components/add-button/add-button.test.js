import React from 'react';
import { shallow } from 'enzyme';
import AddButton from './add-button.js';


it('should render a div with class "add-button-wrapper"', () => {
  const onClick = jest.fn();
  const wrapper = shallow(<AddButton onClick={onClick}/>);
  expect(wrapper.find('div').hasClass('add-button-wrapper')).toEqual(true);
});

it('should render p inside the div with class "button-text"', () => {
  const onClick = jest.fn();
  const wrapper = shallow(<AddButton onClick={onClick}/>);
  expect(wrapper.find('div p.button-text')).toHaveLength(1);
});

it('should invoke onClick function when clicked', () => {
  const callback = jest.fn();
  const wrapper = shallow(<AddButton onClick={callback}/>);
  wrapper.find('div').simulate('click');
  expect(callback.mock.calls.length).toEqual(1);
});
