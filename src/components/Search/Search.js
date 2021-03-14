import PropTypes from 'prop-types'

import './Search.css'

function Search({ userInputSearch }) {
  return (
    <input
      className='Search'
      type='text'
      placeholder='Search here...'
      onChange={(event) => userInputSearch(event.target.value)}
    ></input>
  )
}

Search.propTypes = {
  userInputSearch: PropTypes.func.isRequired,
}

export default Search
