import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="centered flex flex-col items-center justify-center min-h-screen bg-quaternary">
        <h1 className="text-2xl rounded-2xl bg-secondary p-2 text-avocado-500">
          Agile Dashboard
        </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
