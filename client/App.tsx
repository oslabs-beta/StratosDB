import React, { Component } from "react";
import { render } from "react-dom";
import Container from "./Container";
import "codemirror/lib/codemirror.css";

class App extends Component<{}, { name: string }> {
  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}

render(<App />, document.querySelector("#root"));
