import styled from 'styled-components'

export const ModalComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  pointer-events: none;

  ${({ isOpen }) => (isOpen ? 'opacity:1;pointer-events:auto' : '')}
`

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(222, 222, 222, 0.85);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  opacity: 0;

  ${({ isOpen }) => (isOpen ? 'opacity:1;' : '')}
`

export const ModalBodyCentered = styled.div`
  width: 90%;
  max-width: 520px;
  height: 100%;
  max-height: 440px;
  background-color: white;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-in-out, transform 0.333s ease-out;

  @media (min-width: 768px) {
    height: 70vh;
    max-height: 80%;
  }
  ${({ isOpen }) => (isOpen ? 'opacity:1; transform:translateY(0)' : '')}
`
