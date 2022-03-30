import React from "react";
import Layout from "./components/layout/Layout";
import PagesRouting from "./pages/PagesRouting";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <PagesRouting />
    </>
  );
}

export default App;
