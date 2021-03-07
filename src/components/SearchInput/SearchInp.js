// import PropTypes from 'prop-types'

import './SearchInp.css'

function SearchInp({
  filterMenCloth,
  filterJewelery,
  filterElectronics,
  filterWomenCloth,
}) {
  return (
    <div className='SearchInp'>
      <input type='text' placeholder='Search here...'></input>
      <label for='electronics' onClick={filterElectronics()}>
        Electronics
      </label>
      <label for='jewelery' onClick={filterJewelery()}>
        Jewelery
      </label>
      <label for='men clothing' onClick={filterMenCloth()}>
        Men Clothing
      </label>
      <label for='women clothing' onClick={filterWomenCloth()}>
        Women Clothing
      </label>
    </div>
  )
}

// Header.propTypes = {
//   logo: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// }

export default SearchInp
