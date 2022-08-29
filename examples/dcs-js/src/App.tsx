import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { repoGet, createOrgRepo, CreateOrgRepoOption } from "dcs-js/base";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [repo, setRepo] = useState({});

  useEffect(() => {
    const getRepo = async () => {
      const repo = await repoGet({
        path: { owner: "es-419_gl", repo: "es-419_tn" },
      });
      const newRepo = await createOrgRepo({
        path: {
          org: "",
        },
        host: "qa.door43.org",
      });
      setRepo(repo);
    };
    getRepo();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>{JSON.stringify(repo, null, 2)}</p>
    </div>
  );
}

export default App;
