import React from 'react';
import {
  ModalBackground,
  ModalBody,
  ModalButton,
  ModalButtonsWrapper,
  ModalHeader,
  ModalWrapper
} from "./styles/skins";

const Modal = ({
                 showModal = false,
                 toggleModal,
                 modalHeader,
                 modalBody
}) => {
  return showModal ? (
    <>
      <ModalBackground
        onClick={() => toggleModal(false)}
      />
      <ModalWrapper>
        <ModalHeader>${ modalHeader || `Modal Header` }</ModalHeader>
        <ModalBody>${ modalBody || `Modal Body` }</ModalBody>
        <ModalButtonsWrapper>
          <ModalButton onClick={() => toggleModal(false)}>Confirm</ModalButton>
          <ModalButton onClick={() => toggleModal(false)}>Cancel</ModalButton>
        </ModalButtonsWrapper>
      </ModalWrapper>
    </>
  ) : null;
};

export default Modal;
