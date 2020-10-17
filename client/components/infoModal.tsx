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
        <p>CONNECT TO YOUR AWS RDS</p>

        <button className="secondary-button" onClick={props.closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default InfoModal;
