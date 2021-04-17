import styled from 'styled-components'

export const ModalBodySidebarSc = styled.div`
  align-items: center;
  width: 90%;
  max-width: 520px;
  background-color: white;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateX(600px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  z-index: 200;

  @media (min-width: 768px) {
    position: absolute;
    right: 0;
  }
  ${({ isOpen }) => (isOpen ? 'opacity:1; transform:translateY(0)' : '')}
`

export const ModalBodySidebarWrapper = styled.div`
  width: 95vw;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: white;
  min-height: 50vh;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateX(600px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  @media (min-width: 768px) {
    max-width: 520px;
    min-height: 70vh;
  }
  ${({ isOpen }) => (isOpen ? 'opacity:1;transform:translateX(0) ' : '')}
`

export const ModalBodySidebarHeader = styled.header`
  font-size: 1.5rem;
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  position: fixed;
  top: 0;
  background-color: white;
  margin-bottom: 25px;
`

export const ModalBodySidebarTitle = styled.h3`
  position: absolute;
`
