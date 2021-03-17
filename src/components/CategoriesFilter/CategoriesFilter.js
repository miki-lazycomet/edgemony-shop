import { PropTypes } from 'prop-types'
import CategoryFilter from '../CategoryFilter/CategoryFilter'

import { CategoriesFilterSection } from '../../styles/styles'

import './CategoriesFilter.css'

function CategoriesFilter({
  categories,
  selectedCategories,
  onSelectCategory,
}) {
  return (
    <CategoriesFilterSection>
      {categories.map((category) => (
        <CategoryFilter
          key={category}
          categoryName={category}
          selectedCategories={selectedCategories}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </CategoriesFilterSection>
  )
}

CategoriesFilter.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
}

export default CategoriesFilter
