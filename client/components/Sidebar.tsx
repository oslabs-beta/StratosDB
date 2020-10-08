import e from 'express';
import React, { Component } from 'react';

interface SidebarState {
  url: string;
  refresh: any;
}

const Sidebar: React.FC<SidebarState> = (props: SidebarState) => {
  return (
    <div id="sidebar">
      <div id="main-sidebar">
        <div id="main-icons-section">
          <img
            onClick={props.refresh}
            src="./../client/assets/images/stratosdb_logo_visual.png"
            alt="logo"
            id="stratos-logo"
            width="100px"
          />
          <svg
            id="import-button"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M0 2h8l3 3h10v4h3l-4 13h-20v-20zm22.646 8h-17.907l-3.385 11h17.907l3.385-11zm-2.646-1v-3h-9.414l-3-3h-6.586v15.75l3-9.75h16z" />
          </svg>
          <svg
            id="cloud-button"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M18.5 20h-13c-2.481 0-4.5-2.019-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.79c.185-3.447 3.031-6.146 6.48-6.146 3.449 0 6.295 2.699 6.479 6.146l.043.79.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.481-2.019 4.5-4.5 4.5m.979-9.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408" />
          </svg>
        </div>
        <div id="other-icons-section">
          <svg
            id="information-button"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z" />
          </svg>
        </div>
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
};

export default Sidebar;
