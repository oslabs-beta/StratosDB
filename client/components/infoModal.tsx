import React from 'react';
import Modal from 'react-modal';

interface infoModalState {
  modalIsOpen: boolean;
  closeModal: any;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#151524',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(12, 12, 17, 0.75)',
  },
};

Modal.setAppElement('#root');

const InfoModal: React.FC<infoModalState> = (props: infoModalState) => {
  return (
    <div>
      <Modal
        id="info-modal"
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Info Modal"
      >
        <div id="info-composition">
          <button className="secondary-button" onClick={props.closeModal}>
            <strong>x</strong>
          </button>
          <img
            src="./../client/assets/images/stratosdb_logo_white.png"
            alt=""
            width="40%"
          />
          <br />
          <br />
          <h1>S E T U P</h1>
          <p>1. Click on the Cloud Icon (located on the Left Sidebar)</p>
          <br />
          <img
            src="./../client/assets/images/info-modal-cloud-icon.png"
            alt=""
            width="60%"
          />
          <br />
          <br />
          <p>
            2. Enter your AWS RDS Information and press <strong>Connect</strong>
          </p>
          <p>
            <strong>User:</strong> Database Username
            <br />
            <strong>Host:</strong> AWS RDS Endpoint Link *
            <br />
            <strong>Database:</strong> Database name **
            <br />
            <strong>Password:</strong> Database Password
          </p>
          <br />
          <img
            src="./../client/assets/images/info-modal-cloud-modal.png"
            alt=""
            width="60%"
          />
          <br />
          <p>
            * Sourced from AWS RDS Database Instance Dashboard
            <br />
            ** If Database name was left blank when the AWS RDS Datbase Instance
            was created, use <strong>postgres</strong>
          </p>
          <h1>O V E R V I E W</h1>
          <h2>IMPORTING .SQL and .TAR FILES</h2>
          <p>Click on the Cloud Icon (located on the Left Sidebar)</p>
          <h2>SCHEMA CODE EDITOR</h2>
          <p>Click on the Cloud Icon (located on the Left Sidebar)</p>
          <h2>QUERY TEXT EDITOR</h2>
          <p>Click on the Cloud Icon (located on the Left Sidebar)</p>
        </div>
      </Modal>
    </div>
  );
};

export default InfoModal;
