import CategoryFilter from '../CategoryFilter/CategoryFilter'

import { CategoriesFilterSection } from './Categories.elements'

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
          name={category}
          selectedCategories={selectedCategories}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </CategoriesFilterSection>
  )
}

export default CategoriesFilter
