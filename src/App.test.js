import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('calculator working', () => {
  test('Operations working', () => {
    const handleClick = jest.fn();
    render(
      <button onClick={handleClick} value={3}>
        Click
      </button>
    );
    fireEvent.click(screen.getByText(/Click/i));
    expect(handleClick).toBe('3');
  });
});
