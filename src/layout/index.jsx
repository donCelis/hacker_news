import "../styles/components/_tabs.scss";

import { ContextProvider } from "../context/PostsContext";

import Tabs from "../components/Tabs";

function Layout({ children }) {
  return (
    <ContextProvider>
      <main className="App">
        <Tabs />
        {children}
      </main>
    </ContextProvider>
  );
}

export default Layout;
