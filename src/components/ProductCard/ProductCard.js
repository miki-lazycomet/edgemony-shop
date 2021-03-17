import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

import {
  ProductCard_Wrapper,
  ProductCardContent,
  ProductCardImg,
  ProductCardTitle,
  PriceAndBtnWrapper,
  DefaultBlueBtn,
} from '../../styles/styles'

import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <ProductCard_Wrapper>
      <ProductCardImg src={product.image} alt={product.title} />
      <ProductCardContent>
        <ProductCardTitle>{product.title}</ProductCardTitle>
        <span> {product.price} €</span>
      </ProductCardContent>
      <Link to={`/product/${product.id}`}>View Details! </Link>
    </ProductCard_Wrapper>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard
