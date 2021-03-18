import PropTypes from 'prop-types'
import { formatPrice } from '../../services/utils'
import './HeaderCart.css'

import {
  HeaderCartContainer,
  HeaderCart__qty,
  HeaderCart__Icon,
  HeaderCart__price,
} from '../../styles/styles'

function HeaderCart({ cartTotal, cartSize, onCartClick }) {
  return (
    <HeaderCartContainer>
      {!!cartSize && (
        <HeaderCart__price>{formatPrice(cartTotal)}</HeaderCart__price>
      )}
      <HeaderCart__Icon className='icon'>
        <i className='fas fa-shopping-cart'></i>
        {!!cartSize && <HeaderCart__qty>{cartSize}</HeaderCart__qty>}
      </HeaderCart__Icon>
    </HeaderCartContainer>
  )
}

HeaderCart.propTypes = {
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired,
}

export default HeaderCart
