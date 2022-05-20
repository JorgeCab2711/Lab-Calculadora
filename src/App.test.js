import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('calculator working', () => {
  test('Operations working', () => {
    const dom = render(<App />);

    const num1 = dom.container.querySelector('seven');
    const suma = dom.container.querySelector('plus');
    const num2 = dom.container.querySelector('three');
    const equal = dom.container.querySelector('result');

    fireEvent.click(num1);
    fireEvent.click(suma);
    fireEvent.click(num2);
    fireEvent.click(equal);

    const pantalla = dom.container.querySelector('#userInput').innerHTML;
    expect(pantalla).toBe('10');
  });
});
