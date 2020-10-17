import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

interface awsModalState {
  connect: any;
  modalIsOpen: boolean;
  closeModal: any;
  awsInfo: any;
  awsInfoChange: any;
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

const AwsModal: React.FC<awsModalState> = (props: awsModalState) => {
  return (
    <div>
      <Modal
        id="aws-modal"
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Cloud Modal"
      >
        <p>CONNECT TO YOUR AWS RDS</p>
        <form id="aws-modal-form">
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
          <button className="primary-button" onClick={props.connect}>
            Connect
          </button>
        </form>
        <button className="secondary-button" onClick={props.closeModal}>
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default AwsModal;
