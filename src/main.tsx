import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import "./styles/output.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Outfit",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
