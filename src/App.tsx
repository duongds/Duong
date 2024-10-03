import React from "react";
import logo from "./logo.svg";
import "@/assets/styles/app.css";
import TextColor from "@/components/TextColor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-16-24">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextColor />
      </header>
    </div>
  );
}

export default App;
