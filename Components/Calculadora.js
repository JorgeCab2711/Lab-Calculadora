import React, { useState } from 'react';

export default function Calculator() {
  const [result, setResult] = useState('');

  function handleClick(e) {
    {
      /*Solo se permiten 9 caracteres */
    }
    if (result.concat(e.target.name).length > 9) {
      setResult('Error');
    } else {
      setResult(result.concat(e.target.name));
    }
  }

  function clear() {
    setResult('');
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function calculate(x) {
    try {
      x = result;
      var r = eval(x);
      {
        /*No se despliegan numeros mayores a 999999999 ni negativos */
      }
      if (r < 0 || r > 999999999) {
        setResult('Error');
        alert('Negative number');
        window.location.reload();
      } else {
        setResult(eval(result).toString());
      }
    } catch (error) {
      setResult('Error');
    }
  }
  return (
    <>
      <div className="all-container">
        <header>Calculadora</header>
        <div className="calculator-container">
          {/*First row*/}
          <div data-testid="calculator-first-row">
            <input data-testid="userInput" type="text" value={result} />
          </div>
          {/*second row*/}
          <div className="calculator-row">
            <button data-testid="seven" name="7" onClick={handleClick}>
              7
            </button>
            <button data-testid="eight" name="8" onClick={handleClick}>
              8
            </button>
            <button data-testid="nine" name="9" onClick={handleClick}>
              9
            </button>
            <button data-testid="division" name="/" onClick={handleClick}>
              ÷
            </button>
          </div>
          {/*Third row*/}
          <div className="calculator-row">
            <button name="4" data-testid="four" onClick={handleClick}>
              4
            </button>
            <button name="5" data-testid="five" onClick={handleClick}>
              5
            </button>
            <button name="6" data-testid="six" onClick={handleClick}>
              6
            </button>
            <button name="*" data-testid="mult" onClick={handleClick}>
              *
            </button>
          </div>
          {/*Fourth row*/}
          <div className="calculator-row">
            <button name="1" data-testid="one" onClick={handleClick}>
              1
            </button>
            <button name="2" data-testid="two" onClick={handleClick}>
              2
            </button>
            <button name="3" data-testid="three" onClick={handleClick}>
              3
            </button>
            <button name="+" data-testid="plus" onClick={handleClick}>
              +
            </button>
          </div>
          {/*Fifth row*/}
          <div className="calculator-row">
            <button name="." data-testid="dot" onClick={handleClick}>
              .
            </button>
            <button name="0" data-testid="cero" onClick={handleClick}>
              0
            </button>
            <button data-testid="clear" onClick={clear}>
              Clear
            </button>

            <button name="-" data-testid="sub" onClick={handleClick}>
              -
            </button>
          </div>
          {/*Sixth row*/}
          <div className="calculator-last-row">
            <button data-testid="result" value={result} onClick={calculate}>
              =
            </button>
            <button data-testid="backspace" onClick={backspace}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
