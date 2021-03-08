import PropTypes from 'prop-types'

import './Header.css'

function Header({ logo, title, counter, totalPrice }) {
  return (
    <header className='Header'>
      <img src={logo} alt={title} />
      <div className='Cart'>
        <div>{totalPrice}</div>
        <div>{counter}</div>
      </div>
    </header>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Header
