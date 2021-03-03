import { PropTypes } from 'prop-types'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

function ProductList({ products, openProductModal }) {
  return (
    <div className='ProductList'>
      {products.map((product) => (
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
  openProductModal: PropTypes.func.isRequired,
}

export default ProductList
