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
    backgroundColor: '#2a2b47',
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
          <h1>WELCOME TO STRATOSDB</h1>
          <h2>GETTING STARTED</h2>
          <h3>STEP ONE</h3>
          <p>Click on the Cloud Icon (located on the Left Sidebar)</p>
          <h3>STEP TWO</h3>
          <p>
            Enter your AWS RDS Information and press <strong>Connect</strong> to
            establish a link to your cloud hosted database
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
          <p>
            * Sourced from AWS RDS Database Instance Dashboard
            <br />
            ** If Database name was left blank when the AWS RDS Datbase Instance
            was created, use <strong>postgres</strong>
          </p>
          <h2>OVERVIEW</h2>
          <h3>IMPORTING .SQL & .TAR FILES</h3>
          <p>Click on the Cloud Icon (located on the Left Sidebar)</p>
          <h3>SCHEMA CODE EDITOR</h3>
          <p>Click on the Cloud Icon (located on the Left Sidebar)</p>
          <h3>QUERY TEXT EDITOR</h3>
          <p>Click on the Cloud Icon (located on the Left Sidebar)</p>
        </div>
      </Modal>
    </div>
  );
};

export default InfoModal;
