import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const styles = {
    backgroundColor: dark ? "#121212" : "#ffffff",
    color: dark ? "#ffffff" : "#000000",
    height: "1040px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease"
  };

  return (
    <div style={styles}>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;