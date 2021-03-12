import PropTypes from 'prop-types'
import { formatPrice } from '../../services/utils'
import './HeaderCart.css'

function HeaderCart({ cartTotal, cartSize, openCartModal }) {
  return (
    <div className='HeaderCart'>
      {!!cartSize && <span className='price'>{formatPrice(cartTotal)}</span>}
      <span className='icon' onClick={openCartModal}>
        <i className='fas fa-shopping-cart'></i>
        {!!cartSize && <span className='qty'>{cartSize}</span>}
      </span>
    </div>
  )
}

HeaderCart.propTypes = {
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
  openCartModal: PropTypes.func.isRequired,
}

export default HeaderCart
