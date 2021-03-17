import { useState, useEffect } from 'react'
import { fetchProducts, fetchCategories } from '../services/api'

import './Home.css'

import Hero from '../components/Hero/Hero'
import ProductList from '../components/ProductList/ProductList'
import Loader from '../components/Loader/Loader'
import ErrorBanner from '../components/ErrorBanner/ErrorBanner'

const data = {
  title: 'Edgemony Shop',
  description: 'A fake e-commerce with a lot of potential',
  logo:
    'https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png',
  cover:
    'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}

let cache

function Home() {
  // API data logic
  const [products, setProducts] = useState(cache ? cache.products : [])
  const [categories, setCategories] = useState(cache ? cache.categories : [])
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState('')
  const [retry, setRetry] = useState(false)

  useEffect(() => {
    if (cache !== undefined) {
      return
    }
    setIsLoading(true)
    setApiError('')
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([products, categories]) => {
        setProducts(products)
        setCategories(categories)
        cache = { products, categories }
      })
      .catch((err) => setApiError(err.message))
      .finally(() => setIsLoading(false))
  }, [retry])

  return (
    <div>
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
      />
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
          <ProductList products={products} categories={categories} />
        )}
      </main>
    </div>
  )
}

export default Home
