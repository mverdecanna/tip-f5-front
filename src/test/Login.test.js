import React from 'react';
import {Router} from 'react-router';
//import { render } from '@testing-library/react';
import Login from '../components/Login/Login';
import FormLogin from '../components/Login/FormLogin';
import Effect from '../components/Login/Effect';
import { shallow, render, mount } from 'enzyme';



describe('renders learn react link', () => {

  it('should render correctly a FormLogin', () => {

    const wrapper = shallow(<Login />);

    expect(wrapper.find(FormLogin)).toHaveLength(1);

  })

});
