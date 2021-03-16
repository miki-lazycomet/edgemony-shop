import { useState, useEffect } from 'react'
import { fetchProducts, fetchCategories } from '../services/api'

import './Home.css'

import Hero from '../components/Hero/Hero'
import ProductList from '../components/ProductList/ProductList'
import Footer from '../components/Footer/Footer'
import Loader from '../components/Loader/Loader'
import ErrorComp from '../components/ErrorComponent/ErrorComp'

// import Modal from './components/Modal/Modal'
// import ModalBodySidebar from './components/ModalBodySidebar/ModalBodySidebar'
// import Cart from './components/Cart/Cart'
// import { Link } from 'react-router-dom'

const data = {
  title: 'Edgemony Shop',
  description: 'A fake e-commerce with a lot of potential',
  logo:
    'https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png',
  cover:
    'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}

function Home() {
  // Modal logic

  // const [modalIsOpen, setModalIsOpen] = useState(false)

  // function closeModal() {
  //   setModalIsOpen(false)
  // }

  // CartModal logic
  // const [cartModalIsOpen, setCartModalIsOpen] = useState(false)

  // function openCartModal() {
  //   setCartModalIsOpen(true)
  // }

  // function closeModalBodySidebar() {
  //   setCartModalIsOpen(false)
  // }

  // ErrorBanner Logic
  // const [errBannerIsOpen, setErrBannerIsOpen] = useState(false)
  // const closeErrBanner = () => setErrBannerIsOpen(true)

  // useEffect(() => {
  //   if (modalIsOpen || cartModalIsOpen) {
  //     document.body.style.height = `100vh`
  //     document.body.style.overflow = `hidden`
  //   } else {
  //     document.body.style.height = ``
  //     document.body.style.overflow = ``
  //   }
  // }, [modalIsOpen, cartModalIsOpen])

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

  return (
    <div className='Home'>
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
            // openProductPage={openProductPage}
          />
        )
      )}
      {apiError && (
        <ErrorComp
          // bannerIsOpen={errBannerIsOpen}
          // closeErrBanner={closeErrBanner}
          apiError={apiError}
          setRetry={setRetry}
          retry={retry}
        />
      )}
      {/* <Modal isOpen={cartModalIsOpen} close={closeModalBodySidebar}>
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
      </Modal> */}

      <Footer company={data.title} />
    </div>
  )
}

export default Home
