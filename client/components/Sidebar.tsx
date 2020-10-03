import React, { Component } from 'react';

interface SidebarState {
  url: string;
}

class Sidebar extends Component<{}, SidebarState> {
  state: SidebarState = {
    url: '',
  };
  render() {
    return (
      <div>
        <img src='./../assets/images/stratosdb_logo_black.png' alt='picture' />
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    );
  }
}

export default Sidebar;
