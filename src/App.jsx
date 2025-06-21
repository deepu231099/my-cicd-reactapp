import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [deployCount, setDeployCount] = useState(0);

  const handleDeploy = () => {
    setDeployCount((prev) => prev + 1);
  };

  return (
    <div
      className="app-container"
      style={{ textAlign: "center", padding: "2rem", fontFamily: "sans-serif" }}
    >
      <div
        className="logo-group"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginBottom: "1.5rem",
        }}
      >
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
            style={{ width: "80px", transition: "transform 0.3s" }}
          />
        </a>
        <a href="https://github.com/features/actions" target="_blank">
          <img
            src={viteLogo}
            className="logo"
            alt="GitHub Actions logo"
            style={{ width: "80px", transition: "transform 0.3s" }}
          />
        </a>
      </div>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
        🚀 CI/CD with GitHub Actions
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "1rem" }}>
        Learning automated deployment with Vite + React + GitHub Actions
      </p>

      <div
        className="card"
        style={{
          margin: "1rem auto",
          padding: "2rem",
          maxWidth: "400px",
          background: "#f0f0f0",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <button
          onClick={handleDeploy}
          style={{
            backgroundColor: "#007acc",
            color: "white",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "1rem",
          }}
        >
          Trigger Deploy 🚀
        </button>

        <p>
          Total Deploys:{" "}
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {deployCount}
          </span>
        </p>

        <p style={{ fontSize: "0.95rem", marginTop: "0.8rem", color: "#444" }}>
          Push to{" "}
          <code
            style={{
              background: "#ddd",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            main
          </code>{" "}
          to auto-deploy
        </p>
      </div>

      <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#999" }}>
        📚 Read docs:{" "}
        <a
          href="https://docs.github.com/en/actions"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Actions
        </a>{" "}
        |
        <a
          href="https://vitejs.dev/guide/"
          target="_blank"
          rel="noreferrer"
          style={{ marginLeft: "0.5rem" }}
        >
          Vite
        </a>
      </footer>
    </div>
  );
}

export default App;
