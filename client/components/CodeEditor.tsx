import React, { Component } from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/theme/lesser-dark.css';
import CodeMirror from 'react-codemirror';

interface CodeEditorProps {
  onClose: any;
  schemaName: string;
}

interface CodeEditorState {
  schemaEntry: string;
}

class CodeEditor extends Component<{}, CodeEditorState> {
  constructor(props: CodeEditorProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state: CodeEditorState = {
    schemaEntry: '',
  };

  handleChange(event: string) {
    this.setState({
      schemaEntry: event,
    });
  }

  handleSubmit(event: any) {
    event.preventDefault();

    const schemaObj = {
      schemaEntry: this.state.schemaEntry,
    };
    console.log(schemaObj);
  }

  render() {
    // Codemirror module configuration options
    const options = {
      lineNumbers: true,
      mode: 'sql',
      theme: 'lesser-dark',
      lineWrapping: true,
      scrollbarStyle: 'null',
      viewportMargin: Infinity,
    };
    return (
      <div id="code-editor">
        <form onSubmit={this.handleSubmit}>
          <CodeMirror
            onChange={(e) => this.handleChange(e)}
            options={options}
          />
          <button id="submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default CodeEditor;
