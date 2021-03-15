import './ModalBodySidebar.css'

import { PropTypes } from 'prop-types'

function ModalBodySidebar({ closeModalBodySidebar, children, title }) {
  return (
    <div className='ModalBodySidebar__body'>
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
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModalBodySidebar: PropTypes.func.isRequired,
}

export default ModalBodySidebar
