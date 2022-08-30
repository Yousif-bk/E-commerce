import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "./contexts/ContextProvider";
import { UserAuthContextProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { registerLicense } from '@syncfusion/ej2-base';
const root = ReactDOM.createRoot(document.getElementById("root"));

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJVXxKf0x0RWFbb116dFJMZFlBNQtUQF1hS35bdkRjWn1Yc3JRQWRf');

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthContextProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </UserAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
