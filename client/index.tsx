import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import App from "./App";
import store from "./store.js";

render( <App />,
  document.getElementById("root"))
