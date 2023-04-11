import React, { useState } from "react";
import './App.css'




function App() {
    const [input, setInput] = useState("")
    const [result, setResult] = useState("")
    const handleClick = (value) => {
        switch (value) {
            case "c":
                setInput("")
                setResult("")
                break;
            case "=":
                try {
        setInput(eval(input));
                } catch (error) {
                    setResult("Error");
                }
                break;
            case "Ce":
                setInput((prevInput) => prevInput.slice(0, -1));
                setResult("");
                break;
            default:
                
                setResult("");
                setInput((prevInput) => prevInput + value);
                break;
        }
    };
    const board = Array(25).fill(null)
    const Square = ({ children }) => {
        return (
            <div className="square" onClick={() => handleClick(children)}>
                {children}
            </div>
        )
    }
    const Screen = ({input,result}) => {
        return (
            <input className="display" type="text" readOnly value={input + result}  />
        )

    }

    return (
        <main class="tablero">
            <Screen input={input} result={result}></Screen>
            <Square className="tablero">Ce</Square>
            <Square className="tablero">C</Square>
            <Square className="tablero">1</Square>
            <Square className="tablero">2</Square>
            <Square className="tablero">3</Square>
            <Square className="tablero">4</Square>
            <Square className="tablero">5</Square>
            <Square className="tablero">6</Square>
            <Square className="tablero">7</Square>
            <Square className="tablero">8</Square>
            <Square className="tablero">9</Square>
            <Square className="tablero">+</Square>
            <Square className="tablero">-</Square>
            <Square className="tablero">.</Square>
            <Square className="tablero">=</Square>


        </main>
    )
}
export default App;