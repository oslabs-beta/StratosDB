import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

interface SidebarState {
  url: string;
  refresh: any;
  connect: any;
  openModal: any;
  closeModal: any;
  modalIsOpen: boolean;
  awsInfo: any;
  awsInfoChange: any;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Sidebar: React.FC<SidebarState> = (props: SidebarState) => {
  return (
    <div id="sidebar">
      <div id="main-sidebar">
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
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M7 2c1.695 1.942 2.371 3 4 3h13v17h-24v-20h7zm6 11v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
        </svg>
        <svg
          id="cloud-button"
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 24 24"
          onClick={props.openModal}
        >
          <path d="M12 3c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092z" />
        </svg>
        <Modal
          id="aws-modal"
          isOpen={props.modalIsOpen}
          onRequestClose={props.closeModal}
          style={customStyles}
          contentLabel="Cloud Modal"
        >
          {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
          <button onClick={props.closeModal}>close</button>
          <form action="http://localhost:3000/connect" method="post">
            <input
              type="user"
              id="user"
              placeholder="User"
              value={props.awsInfo.user}
              onChange={props.awsInfoChange}
            />
            <input
              type="host"
              id="host"
              placeholder="Host"
              value={props.awsInfo.host}
              onChange={props.awsInfoChange}
            />
            <input
              type="database"
              id="database"
              placeholder="Database"
              value={props.awsInfo.database}
              onChange={props.awsInfoChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={props.awsInfo.password}
              onChange={props.awsInfoChange}
            />
            <input
              type="port"
              id="port"
              placeholder="Port"
              value={props.awsInfo.port}
              onChange={props.awsInfoChange}
            />
            <button type="submit">Connect to AWS!!</button>
          </form>
        </Modal>
        <svg
          id="information-button"
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 24 24"
        >
          <path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm1-6h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z" />
        </svg>
      </div>
      <div id="bottom-sidebar">
        <img
          src="./../client/assets/images/stratosdb_footer_banner.png"
          alt="footer"
          id="stratos-footer"
          width="125px"
        />
      </div>
    </div>
  );
};

export default Sidebar;
