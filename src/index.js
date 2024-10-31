import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "@fortawesome/fontawesome-free/css/all.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />

    <h1>hello</h1>
  </BrowserRouter>
);

reportWebVitals();
