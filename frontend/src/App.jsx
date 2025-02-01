import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");  // Store FastAPI response

  // Function to fetch data from FastAPI
  const fetchMessage = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/");
      const data = await response.json();
      setMessage(data.message); // Set the message in state
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Error fetching data");
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* New Button to Fetch Message */}
        <button onClick={fetchMessage} style={{ marginTop: "10px" }}>
          Fetch Message from FastAPI
        </button>
        {/* Display the fetched message */}
        <p>{message}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
