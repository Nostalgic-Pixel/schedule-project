import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"; // Added
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//added:
import theme from "./styles/theme";

// const rootElement = document.getElementById("root");
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
