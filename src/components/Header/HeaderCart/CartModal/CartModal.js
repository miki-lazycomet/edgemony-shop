// import PropTypes from 'prop-types'

import './CartModal.css'

function CartModal({ isOpen, closeModal }) {
  return (
    <div className={`CartModal ${isOpen ? `isOpen` : ''}`}>
      <div className='overlay' onClick={closeModal} />
      <div className='body'>
        <div className='cartHeader'>
          <h2>Cart</h2> <button type='button'>X</button>
        </div>
        <div className='cartBody'>{/*  qui il body del cartmodal */}</div>
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
