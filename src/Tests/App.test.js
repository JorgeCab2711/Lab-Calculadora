import React, { Component, useState } from 'react';
import {
  render,
  fireEvent,
  cleanup,
  screen,
  getByLabelText,
} from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

it('Must render the App', () => {
  render(<App />);
});
