import { ModalComponent, ModalOverlay } from '../Modal/Modal.elements'

function Modal({ isOpen, onClose, children }) {
  return (
    <ModalComponent isOpen={isOpen}>
      <ModalOverlay isOpen={isOpen} onClick={onClose} />
      {children}
    </ModalComponent>
  )
}

export default Modal
