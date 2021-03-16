import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

// import {Link} from "react-router-dom"

import HeaderCart from '../HeaderCart/HeaderCart'

import './Header.css'

function Header({ logo, title, cartTotal, cartSize, openCartModal }) {
  return (
    <header className='Header'>
      <Link to={`/`}>
        <img src={logo} alt={title} />
      </Link>
      <HeaderCart
        cartTotal={cartTotal}
        cartSize={cartSize}
        openCartModal={openCartModal}
      />
    </header>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
  openCartModal: PropTypes.func.isRequired,
}

export default Header
