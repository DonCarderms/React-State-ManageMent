import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { UserContextProvider } from "./useContext";
import { MyContextAPiProvider } from "./ContextApi";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserContextProvider>
      <MyContextAPiProvider>
        <App />
      </MyContextAPiProvider>
    </UserContextProvider>
  </StrictMode>
);
