import React from 'react';
import Modal from 'react-modal';

interface uploadModalState {
  modalIsOpen: boolean;
  closeModal: any;
  fileUpdate: any;
  fileUpload: any;
  selectedFile: any;
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

const UploadModal: React.FC<uploadModalState> = (props: uploadModalState) => {
  return (
    <div>
      <Modal
        id='upload-Modal'
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel='Upload Modal'
      >
        <p>Import .sql or .tar files!</p>
        <form action='/upload' method='post' encType='multipart/form-data'>
          <input type='file' name='myFile' onChange={props.fileUpdate} />
        </form>
        <button type='button' onClick={props.fileUpload}>
          Import File!
        </button>
      </Modal>
    </div>
  );
};

export default UploadModal;
