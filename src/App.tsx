import AppProvider from "./context/AppProvider";
import PagesRouting from "./pages/PagesRouting";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <AppProvider>
        <GlobalStyle />
        <PagesRouting />
      </AppProvider>
    </>
  );
}

export default App;
