import { useState } from "react";
import Panel from "./components/Panel/Panel.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="centered flex flex-row items-center justify-center min-h-screen bg-quaternary ">
        <Panel>
          <div>This thing</div>
        </Panel>
        <Panel>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome to Agile Dashboard</h1>
            <p className="mb-4">This is a simple dashboard for managing your agile projects.</p>
            <button
              className="bg-primary text-white px-4 py-2 rounded"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
          </div>
        </Panel>
      </div>
    </>
  );
}

export default App;
