// import PropTypes from 'prop-types'

import './CartModal.css'
import HeaderCart from '../HeaderCart/HeaderCart'

function CartModal({ isOpen, closeCartModal, cart }) {
  return (
    <div className={`CartModal ${isOpen ? `isOpen` : ''}`}>
      <div className='overlay' onClick={closeCartModal} />
      <div className='body'>
        <div className='cartHeader'>
          <h2>Cart</h2>
          <button
            type='button'
            onClick={closeCartModal}
            title='close product modal'
            className='close'
          >
            X
          </button>
        </div>
        <div className='cartBody'>{console.log(cart)}</div>
        <div className='cartFooter'>
          <span>{/* qui il totalPrice del cart */}</span>
        </div>
      </div>
    </div>
  )
}

// CartModal.propTypes = {
//   logo: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   cart: PropTypes.array.isRequired,
//   products: PropTypes.array.isRequired,
// }

export default CartModal
