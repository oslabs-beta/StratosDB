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
      <div>
        <Sidebar />
        <Announcement />
        <CodeEditor />
      </div>
    );
  }
}

export default Container;
