import e from 'express';
import React, { Component } from 'react';

interface SidebarState {
  url: string;
}

class Sidebar extends Component<{}, SidebarState> {
  state: SidebarState = {
    url: '',
  };

  handleClick(event: React.ChangeEvent<HTMLSelectElement>) {

  }
  render() {
    return (
      <div id="sidebar">
        <div id="main-sidebar">
          <img
            src="./../client/assets/images/stratosdb_logo_visual.png"
            alt="logo"
            id="stratos-logo"
            width="100px"
          />
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div id="bottom-sidebar">
          <img
            src="./../client/assets/images/stratosdb_footer_banner.png"
            alt="footer"
            id="stratos-footer"
            width="150px"
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;
