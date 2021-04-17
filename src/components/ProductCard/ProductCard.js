import { Link } from 'react-router-dom'

import { formatPrice } from './../../services/utils'

import {
  ProductCardWrapper,
  ProductCardContent,
  ProductCardImg,
  ProductCardTitle,
  PriceAndBtnWrapper,
  DefaultBlueBtn,
} from '../../styles/styles'

function ProductCard({ product }) {
  return (
    <ProductCardWrapper>
      <ProductCardImg src={product.image} alt={product.title} />
      <ProductCardContent>
        <ProductCardTitle>{product.title}</ProductCardTitle>
        <PriceAndBtnWrapper>
          {formatPrice(product.price)}
          <Link to={`/product/${product.id}`}>
            <DefaultBlueBtn type='button'> View Details </DefaultBlueBtn>
          </Link>
        </PriceAndBtnWrapper>
      </ProductCardContent>
    </ProductCardWrapper>
  )
}

export default ProductCard
