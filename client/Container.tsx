import React, { Component } from 'react';
import Announcement from './components/Announcement';
import CodeEditor from './components/CodeEditor';
import Sidebar from './components/Sidebar';

interface obj {
  name: string;
}

class Container extends Component<{}, obj> {
  state: obj = { name: 'Tyler' };
  render() {
    return (
      <div id="main-container">
        <div id="left-panel">
          <Sidebar />
        </div>
        <div id="right-panel">
          <Announcement />
          <CodeEditor />
        </div>
      </div>
    );
  }
}

export default Container;
