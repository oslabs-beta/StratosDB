import React, { Component } from 'react';
import Announcement from './components/Announcement';
import Sidebar from './components/Sidebar';

interface obj {
  name: string;
}

class Container extends Component<{}, obj> {
  state: obj = { name: 'Tyler' };
  render() {
    return (
      <div id="main-container">
        <Sidebar />
        <Announcement />
      </div>
    );
  }
}

export default Container;
