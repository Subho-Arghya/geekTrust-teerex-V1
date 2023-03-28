import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import AppRoute from "./routes/AppRoute";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AppProvider>
          <AppRoute />
        </AppProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
