import PropTypes from 'prop-types'

import './Header.css'

function Header({ logo, title, cart, setCart }) {
  return (
    <header className='Header'>
      <img src={logo} alt={title} />
      <div className='Cart'>
        {/* <span>{totalPrice}</span> <span>{counter}</span> */}
      </div>
    </header>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Header
