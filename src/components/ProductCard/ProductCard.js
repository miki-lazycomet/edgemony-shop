import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <li className='ProductCard'>
      <img src={product.image} alt={product.title} />
      <div className='ProductCard-text'>
        <h3>{product.title}</h3>
        <span> {product.price} €</span>
      </div>
      <Link to={`/product/${product.id}`}>View Details! </Link>
    </li>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard
