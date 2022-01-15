import "../styles/components/_tabs.scss";

import { useEffect, useContext } from "react";
import { ContextProvider } from "../context/PostsContext";

import Tabs from "./Tabs";
import Select from "./Select";
import Blog from "./Blog";

function App() {
  return (
    <ContextProvider>
      <main className="App">
        <Tabs />
        <Select />
        <Blog />
      </main>
    </ContextProvider>
  );
}

export default App;
