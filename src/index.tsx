import App from "./App";
import { GlobalStyle } from "Styles";
import { Provider } from "react-redux";
import React from "react";
import Wrapper from "Contexts/Wrapper";
import { createRoot } from "react-dom/client";
import { store } from "./app/store";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Wrapper>
        <GlobalStyle />
          <App />
      </Wrapper>
    </Provider>
  </React.StrictMode>
);
