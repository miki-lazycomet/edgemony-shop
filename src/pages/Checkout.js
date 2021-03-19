import { useState } from 'react'

import { updateCart, postNewOrder, postNewCart } from '../services/api'

import { CheckoutContainer } from './../styles/styles'

function Checkout({ cartId }) {
  const [formData, setFormData] = useState({
    name: { value: '', modified: false },
    lastName: { value: '', modified: false },
    address: { value: '', modified: false },
    email: { value: '', modified: false },
  })
  function updateData(field) {
    return function (event) {
      setFormData({
        ...formData,
        [field]: { value: event.target.value, modified: true },
      })
    }
  }

  function onSubmit(event, cartId) {
    const data = Object.keys(formData).reduce(
      (acc, key) => ({
        ...acc,
        [key]: formData[key].value,
      }),
      {}
    )

    updateCart(cartId, data)

    console.log(data)
    console.log(data.name)
    console.log(data.lastName)
    event.preventDefault()
  }

  return (
    <CheckoutContainer>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            value={formData.name.value}
            name='name'
            id='name'
            onChange={updateData('name')}
            className={formData.name.modified ? 'modified' : ''}
            required
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            value={formData.lastName.value}
            name='lastName'
            id='lastName'
            onChange={updateData('lastName')}
            className={formData.lastName.modified ? 'modified' : ''}
            required
          />
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            value={formData.address.value}
            name='address'
            id='address'
            onChange={updateData('address')}
            className={formData.address.modified ? 'modified' : ''}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            value={formData.email.value}
            name='email'
            id='email'
            className={formData.email.modified ? 'modified' : ''}
            onChange={updateData('email')}
            required
          />
        </div>
        <button type='submit'>Invia</button>
      </form>
    </CheckoutContainer>
  )
}

export default Checkout
