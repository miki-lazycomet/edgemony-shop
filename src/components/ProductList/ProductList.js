import { useState } from 'react'

import { PropTypes } from 'prop-types'

import ProductCard from '../ProductCard/ProductCard'
import Search from '../Search/Search'
import CategoriesFilter from '../CategoriesFilter/CategoriesFilter'

import './ProductList.css'

function ProductList({ products, categories, openProductModal }) {
  const [searchTerm, setSearchTerm] = useState()
  const [selectedCategories, setSelectedCategories] = useState([])

  const termRegexp = new RegExp(searchTerm, 'i')
  const filteredProducts = products.filter(
    (product) =>
      product.title.search(termRegexp) !== -1 &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category))
  )
  return (
    <div className='ProductList'>
      <div className='ProductList__filters'>
        <Search userInputSearch={setSearchTerm} />
        <CategoriesFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onSelectCategory={setSelectedCategories}
        />
      </div>
      {filteredProducts.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          openProductModal={() => openProductModal(product)}
        />
      ))}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  openProductModal: PropTypes.func.isRequired,
}

export default ProductList
