import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { deleteItemFromCart, postItemToCart, fetchCart } from './services/api'

import './App.css'

import Header from './components/Header/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Page404 from './pages/Page404'
import Loader from './components/Loader/Loader'
import ErrorBanner from './components/ErrorBanner/ErrorBanner'

let cartId

const data = {
  title: 'Edgemony Shop',
  description: 'A fake e-commerce with a lot of potential',
  logo:
    'https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png',
  cover:
    'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState('')
  const [retry, setRetry] = useState(false)

  // Cart Logic
  const [cart, setCart] = useState([])
  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )
  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null
  }
  async function updateCart(fn, ...apiParams) {
    try {
      const cartObj = await fn(...apiParams)
      setCart(cartObj.items)
    } catch (error) {
      console.error(`${fn.name} API call response error! ${error.message}`)
    }
  }
  function addToCart(productId) {
    updateCart(postItemToCart, cartId, productId, 1)
  }
  function removeFromCart(productId) {
    updateCart(deleteItemFromCart, cartId, productId)
  }
  function setProductQuantity(productId, quantity) {
    updateCart(postItemToCart, cartId, productId, quantity)
  }

  // Initial cart fetch from API
  useEffect(() => {
    const cartIdFromLocalStorage = localStorage.getItem('edgemony-cart-id')
    // We fetch only of we have a Cart ID available
    if (cartIdFromLocalStorage) {
      async function fetchCartInEffect() {
        try {
          setIsLoading(true)
          setApiError('')

          const cartObj = await fetchCart(cartIdFromLocalStorage)
          setCart(cartObj.items)
          cartId = cartObj.id
        } catch (error) {
          setApiError(error.message)
        } finally {
          setIsLoading(false)
        }
      }
      fetchCartInEffect()
    }
  }, [retry])

  return (
    <Router>
      <div className='App'>
        <Header
          logo={data.logo}
          title={data.title}
          cartTotal={cartTotal}
          cartSize={cart.length}
        />
        {isLoading ? (
          <Loader />
        ) : apiError ? (
          <ErrorBanner
            message={apiError}
            close={() => setApiError('')}
            retry={() => setRetry(!retry)}
          />
        ) : (
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/cart'>
              <Cart
                products={cart}
                totalPrice={cartTotal}
                removeFromCart={removeFromCart}
                setProductQuantity={setProductQuantity}
              />
            </Route>
            <Route path='/product/:productId'>
              <Product
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                isInCart={isInCart}
              />
            </Route>
            <Route path='*'>
              <Page404 />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  )
}

export default App
