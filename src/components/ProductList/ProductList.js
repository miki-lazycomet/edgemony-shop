import { PropTypes } from 'prop-types'

import ProductCard from '../ProductCard/ProductCard'
import Search from '../Search/Search'
import CategoriesFilter from '../CategoriesFilter/CategoriesFilter'

import { ProductsList } from '../../styles/styles'

import { useLocation, useHistory } from 'react-router'

function ProductList({ products, categories }) {
  const history = useHistory()
  const location = useLocation()
  const query = new URLSearchParams(location.search)

  const selectedCategories = query.get('categories')
    ? query.get('categories').split(',')
    : []
  function setSelectedCategories(cat) {
    if (cat.length > 0) {
      query.set('categories', cat.join(','))
    } else {
      query.delete('categories')
    }
    history.push({ search: '?' + query.toString() })
  }

  const searchTerm = query.get('q') || ''
  function setSearchTerm(term) {
    if (term) {
      query.set('q', term)
    } else {
      query.delete('q')
    }
    history.push({ search: '?' + query.toString() })
  }

  const termRegexp = new RegExp(searchTerm, 'i')
  const filteredProducts = products.filter(
    (product) =>
      product.title.search(termRegexp) !== -1 &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category))
  )
  return (
    <>
      <Search term={searchTerm} onSearch={setSearchTerm} />
      <CategoriesFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onSelectCategory={setSelectedCategories}
      />

      <ProductsList>
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ProductsList>
    </>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
}

export default ProductList
