import './Cart.css'

import { PropTypes } from 'prop-types'
import CartProduct from '../CartProduct/CartProduct'
import { formatPrice } from '../../services/utils'
import { CartPage, CartBody, CartFooter, EmptycartMsg } from '../styles/styles'

function Cart({ products, totalPrice, removeFromCart, setProductQuantity }) {
  return (
    <CartPage>
      <CartBody>
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
          <EmptycartMsg>Nothing here! Try adding some items! :)</EmptycartMsg>
        )}
      </CartBody>
      <CartFooter>Total: {formatPrice(totalPrice)}</CartFooter>
    </CartPage>
  )
}
Cart.propTypes = {
  products: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
}

export default Cart
