import './ModalBodySidebar.css'

import { PropTypes } from 'prop-types'

function ModalBodySidebar({ isOpen, closeModalBodySidebar, children, title }) {
  return (
    <div className={`ModalBodyCenter ${isOpen ? `isOpen` : ''}`}>
      <header>
        <h2 className='ModalBodySidebar__title'>{title}</h2>
        <button
          type='button'
          onClick={closeModalBodySidebar}
          title='close product modal'
          className='ModalBodySidebar__close'
        >
          X
        </button>
      </header>
      <div className='ModalBodySidebar__content'>{children}</div>
    </div>
  )
}
ModalBodySidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  closeModalBodySidebar: PropTypes.func.isRequired,
}

export default ModalBodySidebar
