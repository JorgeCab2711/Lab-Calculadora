import React, { Component, useState } from 'react';
import {
  render,
  fireEvent,
  cleanup,
  screen,
  getByLabelText,
} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

it('Must render the App', () => {
  render(<App />);
});

test('Button handles the click', () => {
  const handleClick = jest.fn();
  render(<button onClick={handleClick}>Delete</button>);
  fireEvent.click(screen.getByText('Delete'));
  expect(handleClick).toHaveBeenCalled();
});

test('Calculates operates the input', () => {
  const clear = jest.fn();
  render(
    <>
      <input data-testid="input" value="123456" />
      <button onClick={clear}>Clear</button>
    </>
  );
  let inputX = screen.getByTestId('input');
  fireEvent.click(screen.getByText('Clear'));
  expect(inputX).toHaveValue('');
});
