import { PropTypes } from 'prop-types'

import ProductCard from '../ProductCard/ProductCard'
import Search from '../Search/Search'
import CategoriesFilter from '../CategoriesFilter/CategoriesFilter'

import './ProductList.css'

import { ProductList__Wrapper, ProductsList } from '../../styles/styles'

import { useLocation, useHistory } from 'react-router'

function ProductList({ products, categories }) {
  const location = useLocation()
  const history = useHistory()

  const searchParams = new URLSearchParams(location.search)

  const searchTerm = searchParams.get('q') || ''

  const selectedCategoriesParam = searchParams.get('categories')
  const selectedCategories = selectedCategoriesParam
    ? selectedCategoriesParam.split(',')
    : []

  function updateCategories(categories) {
    const selectedParam = categories.join(',')
    if (categories.lenght === 0) {
      searchParams.delete('categories')
    } else {
      searchParams.set('categories', selectedParam)
    }

    history.push({
      search: '?' + searchParams.toString(),
    })
  }
  function updateSearchTerm(term) {
    if (term) {
      searchParams.set('q', term)
    } else {
      searchParams.delete('q')
    }
    history.push({
      search: '?' + searchParams.toString(),
    })
  }

  const termRegexp = new RegExp(searchTerm, 'i')
  const filteredProducts = products.filter(
    (product) =>
      product.title.search(termRegexp) !== -1 &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category))
  )
  return (
    <ProductList__Wrapper>
      <Search userInputSearch={updateSearchTerm} />
      <CategoriesFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onSelectCategory={updateCategories}
      />

      <ProductsList>
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ProductsList>
    </ProductList__Wrapper>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
}

export default ProductList
