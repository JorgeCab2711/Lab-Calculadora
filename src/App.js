import React, { useState } from 'react';

function App() {
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

  function calculate() {
    try {
      var r = eval(result);
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
          <div id="calculator-first-row">
            <input id="userInput" type="text" value={result} />
          </div>
          {/*second row*/}
          <div className="calculator-row">
            <button name="7" onClick={handleClick}>
              7
            </button>
            <button name="8" onClick={handleClick}>
              8
            </button>
            <button name="9" onClick={handleClick}>
              9
            </button>
            <button name="/" onClick={handleClick}>
              ÷
            </button>
          </div>
          {/*Third row*/}
          <div className="calculator-row">
            <button name="4" onClick={handleClick}>
              4
            </button>
            <button name="5" onClick={handleClick}>
              5
            </button>
            <button name="6" onClick={handleClick}>
              6
            </button>
            <button name="*" onClick={handleClick}>
              *
            </button>
          </div>
          {/*Fourth row*/}
          <div className="calculator-row">
            <button name="1" onClick={handleClick}>
              1
            </button>
            <button name="2" onClick={handleClick}>
              2
            </button>
            <button name="3" onClick={handleClick}>
              3
            </button>
            <button name="+" onClick={handleClick}>
              +
            </button>
          </div>
          {/*Fifth row*/}
          <div className="calculator-row">
            <button name="." onClick={handleClick}>
              .
            </button>
            <button name="0" onClick={handleClick}>
              0
            </button>
            <button id="clear" onClick={clear}>
              Clear
            </button>

            <button name="-" onClick={handleClick}>
              -
            </button>
          </div>
          {/*Sixth row*/}
          <div className="calculator-last-row">
            <button id="result" onClick={calculate}>
              =
            </button>
            <button id="backspace" onClick={backspace}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
