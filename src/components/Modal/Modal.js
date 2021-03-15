import './Modal.css'
import { PropTypes } from 'prop-types'

function Modal({ closeModal, isOpen, children }) {
  return (
    <div className={`Modal ${isOpen ? `isOpen` : ''}`}>
      <div className='overlay' onClick={closeModal} />
      <div className='body'>{children}</div>
    </div>
  )
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}

export default Modal
