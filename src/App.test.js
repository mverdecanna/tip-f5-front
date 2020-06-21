import React from 'react';
//import { render } from '@testing-library/react';
import App from './';
import Login from '../src/components/Login/Login';
import Effect from '../src/components/Login/Effect';
import { shallow, render } from 'enzyme';



test('renders learn react link', () => {

  render(<App />)

  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
