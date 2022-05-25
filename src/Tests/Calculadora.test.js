import React, { Component, useState } from 'react';
import Calculadora from '../../Components/Calculadora.js';
import { act, renderHook } from '@testing-library/react-hooks';

import {
  render,
  fireEvent,
  cleanup,
  screen,
  getByLabelText,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.js';

test('Button handles the click', () => {
  const handleClick = jest.fn();
  render(<button onClick={handleClick}>Delete</button>);
  fireEvent.click(screen.getByText('Delete'));
  expect(handleClick).toHaveBeenCalled();
});

test('It must clear the value', () => {
  render(<App />);
  const input = screen.getByTestId('userInput');
  const sevenButton = screen.getByTestId('seven');
  const clearButton = screen.getByTestId('clear');
  fireEvent.change(sevenButton, { target: { value: '7' } });
  fireEvent.change(clearButton, { target: { value: '' } });
  expect(input.value).toHaveTextContent('');
});
