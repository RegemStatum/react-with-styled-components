import React from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
