// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Shade = styled.div`
  position: fixed;
  visibility: ${({ modalIsOpen }) =>
    modalIsOpen === true ? `visible` : `hidden`};
  opacity: ${({ modalIsOpen }) => (modalIsOpen === true ? "1" : "0")};
  height: 100vh;
  width: 100vw;
  z-index: 300;
  background-color: ${({ theme: { gray } }) => gray[14].replace("1)", "0.8)")};
  top: 0;
  left: 0;
  transition: 0.5s;
`;

const Modal = styled.div`
  visibility: ${({ modalIsOpen }) =>
    modalIsOpen === true ? `visible` : `hidden`};
  opacity: ${({ modalIsOpen }) => (modalIsOpen === true ? "1" : "0")};
  background-color: ${({ theme: { gray } }) => gray[0]};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.m};
  position: fixed;
  z-index: 301;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 90vw;
  transition: 0.5s;
  text-align: center;

  .close {
    cursor: pointer;
    position: fixed;
    right: ${({ theme: { spacing } }) => spacing[4]};
    top: ${({ theme: { spacing } }) => spacing[2]};
    color: ${({ theme: { gray } }) => gray[0]};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    z-index: 302;
  }
`;

const OverflowDiv = styled.div`
  overflow: auto;
  max-height: 80vh;
  padding: ${({ theme: { spacing } }) => `${spacing[7]} ${spacing[4]}`};
`;

export default function IEModal({ modalIsOpen, children, handleChange }) {
  return (
    <div>
      <Shade modalIsOpen={modalIsOpen} />
      <Modal modalIsOpen={modalIsOpen}>
        <OverflowDiv>
          <button className="close" onClick={handleChange}>
            Negeer
          </button>
          {children}
        </OverflowDiv>
      </Modal>
    </div>
  );
}
