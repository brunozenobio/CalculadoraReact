import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    // Lógica para manejar los botones de la calculadora
  };

  return (
    <div className="calculator">
      <Screen input={input} result={result} />
      <ButtonPanel onButtonClick={handleButtonClick} />
      <HistoryPanel history={history} />
    </div>
  );
}

function Screen({ input, result }) {
  return (
    <div className="screen">
      <div className="input">{input}</div>
      <div className="result">{result}</div>
    </div>
  );
}

function ButtonPanel({ onButtonClick }) {
  return (
    <div className="button-panel">
      <div className="button-row">
        <Button onClick={() => onButtonClick("7")} label="7" />
        <Button onClick={() => onButtonClick("8")} label="8" />
        <Button onClick={() => onButtonClick("9")} label="9" />
        <Button onClick={() => onButtonClick("+")} label="+" />
      </div>
      <div className="button-row">
        <Button onClick={() => onButtonClick("4")} label="4" />
        <Button onClick={() => onButtonClick("5")} label="5" />
        <Button onClick={() => onButtonClick("6")} label="6" />
        <Button onClick={() => onButtonClick("-")} label="-" />
      </div>
      <div className="button-row">
        <Button onClick={() => onButtonClick("1")} label="1" />
        <Button onClick={() => onButtonClick("2")} label="2" />
        <Button onClick={() => onButtonClick("3")} label="3" />
        <Button onClick={() => onButtonClick("*")} label="*" />
      </div>
      <div className="button-row">
        <Button onClick={() => onButtonClick("0")} label="0" />
        <Button onClick={() => onButtonClick(".")} label="." />
        <Button onClick={() => onButtonClick("=")} label="=" />
        <Button onClick={() => onButtonClick("/")} label="/" />
      </div>
    </div>
  );
}

function Button({ onClick, label }) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}

function HistoryPanel({ history }) {
    return (
      <div className="history-panel">
        <h2>History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }