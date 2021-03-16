import { PropTypes } from 'prop-types'
import { useState, useEffect } from 'react'
import { fetchProduct } from '../services/api'
import { useParams } from 'react-router-dom'
import './Product.css'

function Product({ isInCart, addToCart, removeFromCart }) {
  let { productId } = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetchProduct(productId).then((product) => {
      setProduct(product)
    })
  }, [productId])

  const toggleCart = () => {
    if (isInCart(product)) {
      removeFromCart(product)
    } else {
      addToCart(product)
    }
  }
  return product ? (
    <div className='Product'>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <button type='button' className='addToCart' onClick={toggleCart}>
        {isInCart ? 'Remove to Cart -' : 'Add to Cart +'}
      </button>
      <br />
      <br />
      <hr />
      <div className='price'>
        <small>Price:</small> {product.price}€
      </div>
    </div>
  ) : (
    <div> isLoading</div>
  )
}

Product.propTypes = {
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

export default Product
