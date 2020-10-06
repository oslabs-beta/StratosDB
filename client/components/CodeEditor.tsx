import React, { Component } from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/theme/blackboard.css';
import CodeMirror from 'react-codemirror';


// interface CodeEditorProps {
//   onClose: any;
//   schemaName: string;
// }

interface CodeEditorState {
  schemaEntry: string;
  data: object;
  onClose: any;
  schemaName: string;
  handleChange: any;
  handleSubmit: any;
}

const CodeEditor: React.FC<CodeEditorState> = (props:CodeEditorState ) => {

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
        <form onSubmit={props.handleSubmit} id="code-submit-form">
          <CodeMirror
            onChange={(e) => props.handleChange(e)}
            options={options}
          />
          <button id="submit-button">Submit</button>
        </form>
      </div>
    );
  }


export default CodeEditor;
