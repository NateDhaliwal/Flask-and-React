import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import request from "./utils/request";

async function req() {
  let data = await request("/post", "POST", { a: "b" });
  alert(data.time);
}

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    async function fetchData() {
      let data = await request("/index");
      setCurrentTime(data.time);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Message {currentTime}</p>
        <button onClick={req}>CLick me</button>
      </header>
    </div>
  );
}

export default App;
