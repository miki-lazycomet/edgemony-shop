import { PropTypes } from 'prop-types'
import CartProduct from '../components/CartProduct/CartProduct'
import { formatPrice } from '../services/utils'
import { Link } from 'react-router-dom'
import {
  CartPage,
  CartBody,
  CartFooter,
  EmptycartMsg,
  DefaultBlueBtn,
} from '../styles/styles'

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
          )) && (
            <Link to={`/checkout`}>
              <DefaultBlueBtn type='button'> Go to Checkout! </DefaultBlueBtn>{' '}
            </Link>
          )
        ) : (
          <EmptycartMsg>Nothing here! Try adding some items! :)</EmptycartMsg>
        )}{' '}
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
