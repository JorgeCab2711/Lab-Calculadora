import React from 'react';
import './styles.scss';
const App = () => (
  <>
    <div className="all-container">
      <header>Calculadora</header>
      <div className="calculator-container">
        {/*First row*/}
        <div id="calculator-first-row">
          <div className="previous-operator"></div>
          <div className="current-operator"></div>
        </div>
        {/*second row*/}
        <div className="calculator-row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>÷</button>
        </div>
        {/*Third row*/}
        <div className="calculator-row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>*</button>
        </div>
        {/*Fourth row*/}
        <div className="calculator-row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        {/*Fifth row*/}
        <div className="calculator-row">
          <button>.</button>
          <button>0</button>
          <button>=</button>
          <button>-</button>
        </div>
        {/*Sixth row*/}
        <button id="calculator-last-row">Clear</button>
      </div>
    </div>
  </>
);

export default App;
