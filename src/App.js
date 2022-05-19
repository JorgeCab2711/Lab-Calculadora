import React, { useState } from 'react';
import './styles.scss';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  return (
    <>
      <div className="all-container">
        <header>Calculadora</header>
        <div className="calculator-container">
          {/*First row*/}
          <div id="calculator-first-row">
            <input type="text" value={result} />
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
            <button onClick={handleClick}>=</button>
            <button name="-" onClick={handleClick}>
              -
            </button>
          </div>
          {/*Sixth row*/}
          <button className="calculator-last-row">Clear</button>
        </div>
      </div>
    </>
  );
}

export default App;
