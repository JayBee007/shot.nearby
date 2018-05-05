import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import "./index.css";

const root = document.getElementById("root");

const Index = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(<Index />, root);
