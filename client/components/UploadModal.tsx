import React from 'react';
import Modal from 'react-modal';

// uploadModalState state types
interface uploadModalState {
  modalIsOpen: boolean;
  closeModal: any;
  fileUpdate: any;
  fileUpload: any;
  selectedFile: any;
}

//uploadModal styling
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

// Functional Component, UploadModal
const UploadModal: React.FC<uploadModalState> = (props: uploadModalState) => {
  return (
    <div>
      {/* Modal prop drilled and rendered in sidebar  */}
      <Modal
        id='upload-modal'
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel='Upload Modal'
      >
        <h1>I M P O R T</h1>
        <p>.SQL AND .TXT FORMAT ONLY</p>
        <form
          id='upload-form'
          action='/upload'
          method='post'
          encType='multipart/form-data'
        >
          <input
            className='choose-file-button'
            type='file'
            name='myFile'
            onChange={props.fileUpdate}
          />
        </form>
        <button
          className='primary-button'
          type='button'
          onClick={props.fileUpload}
        >
          Import
        </button>
        <button className='secondary-button' onClick={props.closeModal}>
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default UploadModal;
