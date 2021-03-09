import PropTypes from 'prop-types'

import './HeaderCart.css'

function HeaderCart({ cart, products, openCartModal }) {
  const totalPrice = cart
    .reduce((acc, cartItem) => {
      const product = products.find((product) => product.id === cartItem.id)
      return acc + product.price
    }, 0)
    .toFixed(2)

  return (
    <div className='HeaderCart'>
      {!!cart.length && <span className='price'>{totalPrice}€</span>}
      <span className='icon' onClick={openCartModal}>
        <i className='fas fa-shopping-cart'></i>
        {!!cart.length && <span className='qty'>{cart.length}</span>}
      </span>
    </div>
  )
}

HeaderCart.propTypes = {
  cart: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  openCartModal: PropTypes.func.isRequired,
}

export default HeaderCart
