import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

it('Must render the App', () => {
  render(<App />);
});

test('Button handles the click', () => {
  const handleClick = jest.fn();
  render(<button value="1" onClick={handleClick} />);
  fireEvent.click(screen.getByText('Clear'));
  expect(handleClick).toHaveBeenCalled();
});
