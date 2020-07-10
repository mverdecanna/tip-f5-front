import React from 'react';
import {Router} from 'react-router';
//import { render } from '@testing-library/react';
import Card from '../components/Card';
import PlayerList from '../components/PlayerList';
import Effect from '../components/Login/Effect';
import { shallow, render, mount } from 'enzyme';



describe('renders learn react link', () => {

  it('should render correctly title JUGADORES DISPONIBLES', () => {

    const wrapper = shallow(<PlayerList getGlobalDay={ () => 1 } role={""} userRole={""} day={0} />);

    //expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.contains(<h1>JUGADORES DISPONIBLES</h1>)).toBe(true);
  })
  
  
  it('should render correctly title JUGADORES CONFIRMADOS', () => {

    const wrapper = shallow(<PlayerList getGlobalDay={ () => 1 } role={""} userRole={""} day={0} />);

    //expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.contains(<h1>JUGADORES CONFIRMADOS</h1>)).toBe(true);
  })

});