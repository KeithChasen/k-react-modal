import React from 'react';
import {
  ModalBackground,
  ModalBody,
  ModalButton,
  ModalButtonsWrapper,
  ModalHeader,
  ModalWrapper
} from "./styles/skins";

const Modal = () => {
  return (
    <>
      <ModalBackground />
      <ModalWrapper>
        <ModalHeader>Modal Header</ModalHeader>
        <ModalBody>Modal Body</ModalBody>
        <ModalButtonsWrapper>
          <ModalButton>Confirm</ModalButton>
          <ModalButton>Cancel</ModalButton>
        </ModalButtonsWrapper>
      </ModalWrapper>
    </>
  );
};

export default Modal;
