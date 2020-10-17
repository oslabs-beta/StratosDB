import React from "react";
import AwsModal from "./AwsModal";
import InfoModal from "./InfoModal";

interface SidebarState {
  url: string;
  refresh: any;
  connect: any;
  awsOpenModal: any;
  awsCloseModal: any;
  awsModalIsOpen: boolean;
  awsInfo: any;
  awsInfoChange: any;
  infoOpenModal: any;
  infoCloseModal: any;
  infoModalIsOpen: boolean;
  fileUpload: any;
  fileSelected: any;
}

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
          onClick={props.fileUpload}
        >
          <path d="M7 2c1.695 1.942 2.371 3 4 3h13v17h-24v-20h7zm6 11v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
        </svg>
        <svg
          id="cloud-button"
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 24 24"
          onClick={props.awsOpenModal}
        >
          <path d="M12 3c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092z" />
        </svg>
        <AwsModal
          modalIsOpen={props.awsModalIsOpen}
          awsInfo={props.awsInfo}
          awsInfoChange={props.awsInfoChange}
          connect={props.connect}
          closeModal={props.awsCloseModal}
        />
        <svg
          id="information-button"
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 24 24"
          onClick={props.infoOpenModal}
        >
          <path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm1-6h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z" />
        </svg>
        <InfoModal
          modalIsOpen={props.infoModalIsOpen}
          closeModal={props.infoCloseModal}
        />
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
