import e from 'express';
import React, { Component } from 'react';

interface SidebarState {
  url: string;
  refresh: any;
}

const Sidebar: React.FC<SidebarState> = (props:SidebarState) => {
  
    return (
      <div id="sidebar">
        <div id="main-sidebar">
          <img
            src="./../client/assets/images/stratosdb_logo_visual.png"
            alt="logo"
            id="stratos-logo"
            width="100px"
          />
          <button onClick={props.refresh}>1</button>
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


export default Sidebar;
