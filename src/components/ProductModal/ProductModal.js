// import { PropTypes } from 'prop-types'

import './ProductModal.css'

function ProductModal({
  content,
  closeModal,
  isOpen,
  totalPrice,
  setTotalPrice,
  counter,
  setCounter,
}) {
  function addProduct(contentPrice) {
    const addPrice = totalPrice + contentPrice
    console.log(addPrice)
    setTotalPrice(addPrice)
    const newCounter = counter + 1
    console.log(newCounter)
    setCounter(newCounter)
  }

  return (
    <div className={`ProductModal ${isOpen ? `isOpen` : ''}`}>
      <div className='overlay' onClick={closeModal} />
      <div className='body'>
        <button onClick={closeModal} title='close product modal'>
          ×
        </button>
        {!!content ? (
          <div className='content'>
            <img src={content.image} alt={content.title} />
            <h1>{content.title}</h1>
            <p>{content.description}</p>
            <hr />
            <div className='price'>
              <small>Price:</small> {content.price}€
            </div>
            <button type='button' onClick={() => addProduct(content.price)}>
              add to Cart
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

// ProductModal.propTypes = {
//   product: PropTypes.object.isRequired,
//   openProductModal: PropTypes.func.isRequired,
// }

export default ProductModal
