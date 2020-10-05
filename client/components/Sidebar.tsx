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
      <div id="sidebar">
        <img
          src="./../client/assets/images/stratosdb_logo_visual.png"
          alt="picture"
          id="stratos-logo"
          width="100px"
        />
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    );
  }
}

export default Sidebar;
