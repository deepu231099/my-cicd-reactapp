import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [deployCount, setDeployCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/features/actions" target="_blank">
          <img
            src={viteLogo}
            className="logo react"
            alt="GitHub Actions logo"
          />
        </a>
      </div>
      <h1>Learning CI/CD with GitHub Actions</h1>
      <div className="card">
        <button onClick={() => setDeployCount((c) => c + 1)}>
          Deploy count: {deployCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and push to <strong>main</strong> branch
          to trigger GitHub Actions!
        </p>
      </div>
      <p className="read-the-docs">
        Click the logos to explore Vite and GitHub Actions documentation.
      </p>
    </>
  );
}

export default App;
