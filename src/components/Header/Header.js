import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import HeaderCart from '../HeaderCart/HeaderCart'

import './Header.css'

function Header({ logo, title, cartTotal, cartSize, onCartClick }) {
  return (
    <header className='Header'>
      <Link to={`/`}>
        <img src={logo} alt={title} />
      </Link>{' '}
      <Link to='/cart'>
        <HeaderCart
          cartTotal={cartTotal}
          cartSize={cartSize}
          onCartClick={onCartClick}
        />
      </Link>
    </header>
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
