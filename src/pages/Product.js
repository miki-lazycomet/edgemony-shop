import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchProduct } from '../services/api';
import { useParams } from 'react-router-dom';

<<<<<<< HEAD
import {
  ProductContent,
  ProductTextContent,
  DefaultBlueBtn,
  ProductImg,
  ProductDescription,
  ProductPriceAndBtn,
} from './../styles/styles'

import Loader from '../components/Loader/Loader'
import ErrorBanner from '../components/ErrorBanner/ErrorBanner'
=======
import Loader from '../components/Loader/Loader';
import ErrorBanner from '../components/ErrorBanner/ErrorBanner';
import './Product.css';
>>>>>>> 53f8aeb8725774188f2e8efd1924e2900f66a546

function Product({ addToCart, removeFromCart, isInCart }) {
  let { productId } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setApiError('');
    fetchProduct(productId)
      .then((product) => {
        setProduct(product);
      })
      .catch((err) => setApiError(err.message))
      .finally(() => setIsLoading(false));
  }, [productId, retry]);

  const toggleCart = () => {
    if (isInCart(product)) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  };

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : apiError ? (
        <ErrorBanner
          message={apiError}
          close={() => setApiError('')}
          retry={() => setRetry(!retry)}
        />
      ) : (
        <ProductContent>
          <ProductImg src={product.image} alt={product.title} />
          <ProductTextContent>
            <h3>{product.title}</h3>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPriceAndBtn>
              <DefaultBlueBtn
                type='button'
                className='addToCart'
                onClick={toggleCart}
              >
                {isInCart(product) ? 'Remove from Cart -' : 'Add to Cart +'}
              </DefaultBlueBtn>
              <small>Price:</small> {product.price}€
            </ProductPriceAndBtn>
          </ProductTextContent>
        </ProductContent>
      )}
    </main>
  );
}

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired,
};

export default Product;
