import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import HeaderCart from '../HeaderCart/HeaderCart'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderCartContainer,
} from '../../styles/styles'

import './Header.css'

function Header({ logo, cartTotal, cartSize, onCartClick }) {
  return (
    <HeaderContainer>
      <Link to={`/`}>
        <HeaderLogo src={logo} alt='headerLogo' />
      </Link>
      <HeaderCartContainer>
        <Link to='/cart'>
          <HeaderCart
            cartTotal={cartTotal}
            cartSize={cartSize}
            onCartClick={onCartClick}
          />
        </Link>
      </HeaderCartContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired,
}

export default Header
