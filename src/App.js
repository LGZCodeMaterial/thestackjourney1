import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const TestCom = () => {
    const [name, setName] = useState("billy");

    const changeName = e => {
        setName(e.target.value);
    };

    useEffect(() => {
        document.title = name;
    });

    return (
        <div>
            {name}
            <input type="text" value={name} onChange={changeName} />
        </div>
    );
};

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <TestCom />
                <p>
                    Edit <code>src/App.js</code> and save to reload....
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
