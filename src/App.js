import { useState, useEffect } from 'react'
import { fetchProducts, fetchCategories } from './services/api'

import './App.css'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProductList from './components/ProductList/ProductList'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import ErrorComp from './components/ErrorComponent/ErrorComp'
import Modal from './components/Modal/Modal'
import ModalBodySidebar from './components/ModalBodySidebar/ModalBodySidebar'
import Cart from './components/Cart/Cart'
import ModalBodyCenter from './components/ModalBodyCenter/ModalBodyCenter'
import ProductDetails from './components/ProductDetails/ProductDetails'

const data = {
  title: 'Edgemony Shop',
  description: 'A fake e-commerce with a lot of potential',
  logo:
    'https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png',
  cover:
    'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}

function App() {
  // Product Modal logic
  const [productInModal, setProductInModal] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openProductModal(product) {
    console.log(product)
    setProductInModal(product)
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
    setTimeout(() => {
      setProductInModal(null)
    }, 500)
  }

  // CartModal logic
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false)

  function openCartModal() {
    setCartModalIsOpen(true)
  }

  function closeModalBodySidebar() {
    setCartModalIsOpen(false)
  }

  // ErrorBanner Logic
  const [errBannerIsOpen, setErrBannerIsOpen] = useState(false)
  const closeErrBanner = () => setErrBannerIsOpen(true)

  useEffect(() => {
    if (modalIsOpen || cartModalIsOpen) {
      document.body.style.height = `100vh`
      document.body.style.overflow = `hidden`
    } else {
      document.body.style.height = ``
      document.body.style.overflow = ``
    }
  }, [modalIsOpen, cartModalIsOpen])

  // API data logic
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState('')
  const [retry, setRetry] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setApiError('')
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([products, categories]) => {
        setProducts(products)
        setCategories(categories)
      })
      .catch((err) => setApiError(err.message))
      .finally(() => setIsLoading(false))
  }, [retry])

  // Cart logic

  const [cart, setCart] = useState([])

  // Cart Card
  const cartProducts = cart.map((cartItem) => {
    const { price, image, title, id } = products.find(
      (p) => p.id === cartItem.id
    )
    return { price, image, title, id, quantity: cartItem.quantity }
  })

  const cartTotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )
  const cartSize = cart.length

  //   Cart Functions
  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null
  }
  function addToCart(productId) {
    setCart([...cart, { id: productId, quantity: 1 }])
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

  return (
    <div className='App'>
      <Header
        logo={data.logo}
        title={data.title}
        cartTotal={cartTotal}
        cartSize={cartSize}
        openCartModal={openCartModal}
      />
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
      />

      {isLoading ? (
        <Loader />
      ) : (
        !apiError && (
          <ProductList
            products={products}
            categories={categories}
            openProductModal={openProductModal}
          />
        )
      )}
      {apiError && (
        <ErrorComp
          bannerIsOpen={errBannerIsOpen}
          closeErrBanner={closeErrBanner}
          apiError={apiError}
          setRetry={setRetry}
          retry={retry}
        />
      )}
      <Modal isOpen={cartModalIsOpen} close={closeModalBodySidebar}>
        <ModalBodySidebar
          isOpen={cartModalIsOpen}
          closeModalBodySidebar={closeModalBodySidebar}
          title='Cart'
        >
          <Cart
            totalPrice={cartTotal}
            products={cartProducts}
            setProductQuantity={setProductQuantity}
            removeFromCart={removeFromCart}
          />
        </ModalBodySidebar>
      </Modal>

      <Modal isOpen={modalIsOpen} close={closeModal}>
        <ModalBodyCenter closeModal={closeModal}>
          {productInModal && (
            <ProductDetails
              content={productInModal}
              inCart={isInCart(productInModal)}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          )}
        </ModalBodyCenter>
      </Modal>

      <Footer company={data.title} />
    </div>
  )
}

export default App
