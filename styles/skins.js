import styled, { css } from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  opacity: 0.6;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background: black;
`;

const ModalWrapper = styled.div`
  background: var(--app-grey);
  width: 40vw;
  min-height: 25vw;
  position: absolute;
  border: 0.3rem solid var(--app-white);
  border-radius: 0.5rem;
  top: 20%;
  left: 30%;
`;

const modalSharedPartsStyles = css`
  background: var(--app-white);
  width: 90%;
  margin-bottom: 0.2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalHeader = styled.div`
  height: 5rem;
  ${modalSharedPartsStyles}
`;
const ModalBody = styled.div`
  height: 10rem;
  ${modalSharedPartsStyles}
`;
const ModalButtonsWrapper = styled.div`
  height: 3rem;
  ${modalSharedPartsStyles}
`;

const ModalButton = styled.button`
  min-width: 10rem;
  min-height: 2rem;
  margin: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--app-black);
  border: 0.2rem solid var(--app-grey);
  border-radius: 0.3rem;
  
  &:hover {
    background: var(--app-grey);
  }
`;

export {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ModalBody,
  ModalButtonsWrapper,
  ModalButton
};
