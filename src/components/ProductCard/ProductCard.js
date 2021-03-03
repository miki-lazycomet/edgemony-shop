import { PropTypes } from 'prop-types'

import './ProductCard.css'

function ProductCard({ product, openProductModal }) {
  return (
    <li className='ProductCard'>
      <img src={product.image} alt={product.title} />
      <div className='ProductCard-text'>
        <h3>{product.title}</h3>
        <span> {product.price} €</span>
      </div>
      <button onClick={openProductModal}>View Details</button>
    </li>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  openProductModal: PropTypes.func.isRequired,
}

export default ProductCard
