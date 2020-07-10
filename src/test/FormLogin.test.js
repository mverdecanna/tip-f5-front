import React from 'react';
import {Router} from 'react-router';
//import { render } from '@testing-library/react';
import FormLogin from '../components/Login/FormLogin';
import { shallow, render, mount } from 'enzyme';



describe('renders learn react link', () => {

  it('should render correctly title Admin Login', () => {

    const wrapper = shallow(<FormLogin />);

    //expect(wrapper.contains(<button>Ingresar</button>)).toBe(true);
    expect(wrapper.contains(<h2>Admin Login</h2>)).toBe(true);
  })


});
