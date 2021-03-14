import { PropTypes } from 'prop-types'
import CategoryFilter from '../CategoryFilter/CategoryFilter'

import './CategoriesFilter.css'

function CategoriesFilter({
  categories,
  selectedCategories,
  onSelectCategory,
}) {
  return (
    <div className='CategoriesFilter'>
      {categories.map((category) => (
        <CategoryFilter
          key={category}
          categoryName={category}
          selectedCategories={selectedCategories}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </div>
  )
}

CategoriesFilter.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
}

export default CategoriesFilter
