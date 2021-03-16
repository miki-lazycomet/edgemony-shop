import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'

import './App.css'

import Home from './pages/Home'
import Product from './pages/Product'
import Page404 from './pages/Page404'

import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import ModalBodySidebar from './components/ModalBodySidebar/ModalBodySidebar'
// import ModalBodyCenter from './components/ModalBodyCenter/ModalBodyCenter'
import Cart from './components/Cart/Cart'

const data = {
  title: 'Edgemony Shop',
  description: 'A fake e-commerce with a lot of potential',
  logo:
    'https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png',
  cover:
    'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}

function App() {
  // Modal logic

  // const [modalIsOpen, setModalIsOpen] = useState(false)

  // CartModal logic
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false)

  function openCartModal() {
    setCartModalIsOpen(true)
  }

  function closeModalBodySidebar() {
    setCartModalIsOpen(false)
  }

  // // ErrorBanner Logic
  // const [errBannerIsOpen, setErrBannerIsOpen] = useState(false)
  // const closeErrBanner = () => setErrBannerIsOpen(true)

  useEffect(() => {
    if (cartModalIsOpen) {
      document.body.style.height = `100vh`
      document.body.style.overflow = `hidden`
    } else {
      document.body.style.height = ``
      document.body.style.overflow = ``
    }
  }, [cartModalIsOpen])

  // Cart logic

  const [cart, setCart] = useState([])

  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )

  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null
  }
  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }])
  }
  function removeFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId))
  }
  function setProductQuantity(productId, quantity) {
    setCart(
      cart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    )
  }
  // const cartProducts = cart.map((cartItem) => {
  //   const { price, image, title, id } = [].find((p) => p.id === cartItem.id)
  //   return { price, image, title, id, quantity: cartItem.quantity }
  // })

  const cartSize = cart.length

  return (
    <Router>
      <div className='App'>
        <Header
          logo={data.logo}
          title={data.title}
          cartTotal={cartTotal}
          cartSize={cartSize}
          openCartModal={openCartModal}
        />
        <Modal isOpen={cartModalIsOpen} close={closeModalBodySidebar}>
          <ModalBodySidebar
            isOpen={cartModalIsOpen}
            closeModalBodySidebar={closeModalBodySidebar}
            title='Cart'
          >
            <Cart
              totalPrice={cartTotal}
              products={cart}
              setProductQuantity={setProductQuantity}
              removeFromCart={removeFromCart}
            />
          </ModalBodySidebar>
        </Modal>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/product/:productId'>
            <Product
              isInCart={isInCart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            ></Product>
          </Route>
          <Route exact path='*'>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
