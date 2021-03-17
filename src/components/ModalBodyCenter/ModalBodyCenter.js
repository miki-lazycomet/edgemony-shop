import { PropTypes } from 'prop-types'

import './ModalBodyCenter.css'

function ModalBodyCenter({ isOpen, closeModal, children }) {
  return (
    <div className={`ModalBodyCenter ${isOpen ? `isOpen` : ''}`}>
      <button
        onClick={closeModal}
        title='close product modal'
        className='close'
      >
        ×
      </button>
      <div className='ModalBodyCenter__content'>{children}</div>
    </div>
  )
}

ModalBodyCenter.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default ModalBodyCenter
