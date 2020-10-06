import React, { Component } from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/theme/blackboard.css';
import CodeMirror from 'react-codemirror';
import axios from "axios";

interface CodeEditorProps {
  onClose: any;
  schemaName: string;
}

interface CodeEditorState {
  schemaEntry: string;
  data: object;
}

class CodeEditor extends Component<{}, CodeEditorState> {
  constructor(props: CodeEditorProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state: CodeEditorState = {
    schemaEntry: '',
    data: {},
  };

  handleChange(event: string) {
    this.setState({
      ...this.state,
      schemaEntry: event,
    });
  }

  handleSubmit(event: any) {
    event.preventDefault();

    const schemaObj = {
      schemaEntry: this.state.schemaEntry,
    };

    axios.post('/results', schemaObj).then((data) => {
      console.log('logging data', data.data);
      this.setState({data: data})
    })
    
  }

  render() {
    // Codemirror module configuration options
    const options = {
      lineNumbers: true,
      mode: 'sql',
      theme: 'blackboard',
      lineWrapping: true,
      scrollbarStyle: 'null',
      viewportMargin: Infinity,
      tabSize: 2,
    };
    return (
      <div id="code-editor">
        <form onSubmit={this.handleSubmit} id="code-submit-form">
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
