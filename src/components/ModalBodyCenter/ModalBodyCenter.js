import { PropTypes } from 'prop-types'

import './ModalBodyCenter.css'

function ModalBodyCenter({ closeModal, children }) {
  return (
    <div className='ModalBodyCenter'>
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
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default ModalBodyCenter
