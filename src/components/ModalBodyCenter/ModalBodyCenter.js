import { PropTypes } from 'prop-types'

import './ModalBodyCenter.css'

function ModalBodyCenter({ closeModal, isOpen, children }) {
  return (
    <div className={`ModalBodyCenter ${isOpen ? `isOpen` : ''}`}>
      <div className='overlay' onClick={closeModal} />
      <div className='body'>
        <button
          onClick={closeModal}
          title='close product modal'
          className='close'
        >
          ×
        </button>
        <div className='ModalBodyCenter__content'>{children}</div>
      </div>
    </div>
  )
}

ModalBodyCenter.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  inCart: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}

export default ModalBodyCenter
