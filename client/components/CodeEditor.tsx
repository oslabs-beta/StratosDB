import React, { Component } from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/theme/lesser-dark.css';
// import CodeMirror from 'react-codemirror';

interface SchemaInputProps {
  onClose: any;
  schemaName: string;
}

interface SchemaInputState {
  schemaEntry: string;
}

class CodeEditor extends Component<{}, SchemaInputState> {
  state: SchemaInputState = {
    schemaEntry: '',
  };

  render() {
    // Codemirror module configuration options
    var options = {
      lineNumbers: true,
      mode: 'sql',
      theme: 'lesser-dark',
    };
    return (
      <div>
        <p>hi</p>
      </div>
    );
  }
}

export default CodeEditor;
