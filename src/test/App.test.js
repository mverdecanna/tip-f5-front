import React from 'react';
import {Router} from 'react-router';
//import { render } from '@testing-library/react';
import App from '../App';
import Login from '../components/Login/Login';
import MenuBar from '../components/Menu/MenuBar';
import Effect from '../components/Login/Effect';
import { shallow, render, mount } from 'enzyme';



describe('renders learn react link', () => {

  it('should render correctly', () => {

    const wrapper = shallow(<App authOK={true} router={[]} userEmail={""} userRole={""} role={""} group={""} day={""} getGlobalDay={""} setGlobalDay={""} children={<div/>}/>);

    expect(wrapper.find(MenuBar)).toHaveLength(1);

  })

  //render(<App />)

  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
