import React from 'react';
import {Router} from 'react-router';
//import { render } from '@testing-library/react';
import Home from '../components/Home';
import PlayerList from '../components/PlayerList';
import Effect from '../components/Login/Effect';
import { shallow, render, mount } from 'enzyme';



describe('renders learn react link', () => {

  it('should render correctly a component PlayerList', () => {

    const wrapper = shallow(<Home />);

    expect(wrapper.find(PlayerList)).toHaveLength(1);

  })

 
});