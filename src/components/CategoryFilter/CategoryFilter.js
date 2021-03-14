import { PropTypes } from 'prop-types'

import './CategoryFilter.css'

function CategoryFilter({
  categoryName,
  selectedCategories,
  onSelectCategory,
}) {
  const isSelected = selectedCategories.includes(categoryName)
  const className = 'CategoryFilter' + (isSelected ? ' selected' : '')
  const toggleCategory = () => {
    const newSelected = isSelected
      ? selectedCategories.filter((category) => category !== categoryName)
      : [...selectedCategories, categoryName]
    onSelectCategory(newSelected)
  }

  return (
    <button key={categoryName} className={className} onClick={toggleCategory}>
      {categoryName}
    </button>
  )
}

CategoryFilter.propTypes = {
  categoryName: PropTypes.string.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
}

export default CategoryFilter
