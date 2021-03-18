import PropTypes from 'prop-types'

import './Search.css'

import { SearchProductsSect } from '../../styles/styles'

function Search({ userInputSearch }) {
  return (
    <SearchProductsSect>
      <input
        className='Search'
        type='text'
        placeholder='Search here...'
        onChange={(event) => userInputSearch(event.target.value)}
      ></input>
    </SearchProductsSect>
  )
}

Search.propTypes = {
  userInputSearch: PropTypes.func.isRequired,
}

export default Search
