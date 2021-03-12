import './CartModal.css'

import PropTypes from 'prop-types'
import CartProduct from '../CartProduct/CartProduct'
import { formatPrice } from '../../services/utils'

function CartModal({
  products,
  isOpen,
  closeCartModal,
  totalPrice,
  removeFromCart,
  setProductQuantity,
}) {
  return (
    <div className={`CartModal ${isOpen ? `isOpen` : ''}`}>
      <div className='overlay' onClick={closeCartModal} />
      <div className='body'>
        <header className='cartHeader'>
          <h2 className='CartModal__title'>Cart</h2>
          <button
            type='button'
            onClick={closeCartModal}
            title='close product modal'
            className='close'
          >
            X
          </button>
        </header>
        <div className='cartBody'>
          {products.length > 0 ? (
            products.map((product) => (
              <CartProduct
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
                setProductQuantity={setProductQuantity}
              />
            ))
          ) : (
            <p className='ModalCart__content__empty'>The cart is empty</p>
          )}
        </div>
        <footer>Total: {formatPrice(totalPrice)}</footer>
      </div>
    </div>
  )
}
CartModal.propTypes = {
  products: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeCartModal: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
}

export default CartModal
