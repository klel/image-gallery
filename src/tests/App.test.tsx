import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders search label', () => {
  render(<App />);
  const linkElement = screen.getByLabelText(/search/i);
  expect(linkElement).toBeInTheDocument();
});
