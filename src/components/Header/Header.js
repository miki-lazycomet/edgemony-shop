import PropTypes from 'prop-types'

import HeaderCart from './HeaderCart/HeaderCart'

import './Header.css'

function Header({
  logo,
  title,
  cart,
  products,
  openCartModal,
  isOpen,
  closeModal,
}) {
  return (
    <header className='Header'>
      <img src={logo} alt={title} />
      <HeaderCart
        cart={cart}
        products={products}
        openCartModal={openCartModal}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </header>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cart: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  openCartModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default Header
