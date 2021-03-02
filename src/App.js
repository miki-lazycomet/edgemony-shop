import './App.css'
import Header from './components/Header/Header'
import './components/Header/Header.css'
import Hero from './components/Hero/Hero'
import './components/Hero/Hero.css'
// import Body from './components/Body/Body'
// import './components/Body/Body.css'
import './components/Products/Products.css'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import './components/Footer/Footer.css'

const fakeProducts = require('./mocks/data/products.json')

const data = {
  title: 'Edgemony Shop',
  description: 'A fake e-commerce with a lot of potential',
  logo:
    'https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png',
  cover:
    'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  products: fakeProducts,
}

function App() {
  return (
    <div className='App'>
      <Header logo={data.logo} />
      <Hero
        title={data.title}
        cover={data.cover}
        description={data.description}
      />

      <div className='products-container'>
        <Products
          fakeProducts={data.products}
          card_title={data.products.title}
          cardCover={data.products.image}
          price={data.products.price}
        />
      </div>
      <Footer company={data.title} />
    </div>
  )
}

export default App
