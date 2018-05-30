import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({listUpdated, handleClearUpdate}) => (
  <div>
    <Modal
      isOpen={listUpdated}
      onRequestClose={handleClearUpdate}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal-message"
    >
      <div className="modal__sml">
        <h3 className="modal__title">Component Updated</h3>
        {listUpdated && <p className="modal__body">here i am</p>}
        <button className="button" onClick={handleClearUpdate}>Okay</button>
      </div>
    </Modal>
  </div>
);

export default OptionModal;