import React, { Component } from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/mode/sql/sql";
import "codemirror/theme/lesser-dark.css";
import CodeMirror from "react-codemirror";

interface SchemaInputProps {
  onClose: any;
  schemaName: string;
}

interface SchemaInputState {
  schemaEntry: string;
}

class CodeEditor extends Component<{}, SchemaInputState> {
  state: SchemaInputState = {
    schemaEntry: "",
  };

  render() {
    // Codemirror module configuration options
    const options = {
      lineNumbers: true,
      mode: "sql",
      theme: "lesser-dark",
    };
    return (
      <div>
        <h1>Type your code here!</h1>
        <CodeMirror options={options} />
      </div>
    );
  }
}

export default CodeEditor;
