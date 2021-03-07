import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProductList from './components/ProductList/ProductList'
import ProductModal from './components/ProductModal/ProductModal'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import ErrorComp from './components/ErrorComponent/ErrorComp'
import SearchInp from './components/SearchInput/SearchInp'

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

  // ErrorBanner Logic
  const [errBannerIsOpen, setErrBannerIsOpen] = useState(false)
  // function closeErrBanner() {
  //   setErrBannerIsOpen(true)
  // }
  const closeErrBanner = () => setErrBannerIsOpen(true)

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.height = `100vh`
      document.body.style.overflow = `hidden`
    } else {
      document.body.style.height = ``
      document.body.style.overflow = ``
    }
  }, [modalIsOpen])

  // API data logic
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState('')
  const [retry, setRetry] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        const hasError = Math.random() > 0.5
        if (!hasError) {
          setProducts(data)
          setIsLoading(false)
          setApiError('')
        } else {
          throw new Error('Product server API call response error')
        }
      })
      .catch((err) => {
        setApiError(err.message)
        setIsLoading(false)
      })
  }, [retry])

  // Filter Labels & Search Input logic

  function filterElectronics(products) {
    const electronics = data.filter(
      (product) => product.category === 'electronics'
    )
    setProducts(electronics)
  }
  function filterJewelery(products) {
    const jewelery = products.filter(
      (product) => product.category === 'jewelery'
    )
    setProducts(jewelery)
  }

  function filterMenCloth(products) {
    const menClothing = products.filter(
      (product) => product.category === 'men clothing'
    )
    setProducts(menClothing)
  }

  function filterWomenCloth(products) {
    const womenClothing = products.filter(
      (product) => product.category === 'women clothing'
    )
    setProducts(womenClothing)
  }

  return (
    <div className='App'>
      <Header logo={data.logo} title={data.title} />
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
      />
      <SearchInp
        filterMenCloth={filterMenCloth}
        filterWomenCloth={filterWomenCloth}
        filterElectronics={filterElectronics}
        filterJewelery={filterJewelery}
      />

      {isLoading ? (
        <Loader />
      ) : (
        !apiError && (
          <ProductList
            products={products}
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
      <ProductModal
        isOpen={modalIsOpen}
        content={productInModal}
        closeModal={closeModal}
      />
      <Footer company={data.title} />
    </div>
  )
}

export default App
