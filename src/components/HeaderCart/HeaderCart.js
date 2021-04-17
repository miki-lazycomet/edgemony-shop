import PropTypes from 'prop-types'
import { formatPrice } from '../../services/utils'

import {
  HeaderCartContainer,
  HeaderCartQty,
  HeaderCartIcon,
  HeaderCartPrice,
} from '../../styles/styles'

function HeaderCart({ cartTotal, cartSize }) {
  return (
    <HeaderCartContainer>
      {!!cartSize && (
        <HeaderCartPrice>{formatPrice(cartTotal)}</HeaderCartPrice>
      )}
      <HeaderCartIcon className='icon'>
        <i className='fas fa-shopping-cart'></i>
        {!!cartSize && <HeaderCartQty>{cartSize}</HeaderCartQty>}
      </HeaderCartIcon>
    </HeaderCartContainer>
  )
}

HeaderCart.propTypes = {
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
}

export default HeaderCart
