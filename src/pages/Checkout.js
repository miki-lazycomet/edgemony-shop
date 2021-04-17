import { useState } from 'react';

import { updateCart, postNewOrder, postNewCart } from '../services/api';

import {
  CheckoutContainer,
  Form,
  FormInputContainer,
  InputText,
  FormLabel,
  BasicBtn,
} from './../styles/styles';

const cartId = localStorage.getItem('edgemony-cart-id');
console.log(cartId);

function Checkout() {
  const [formData, setFormData] = useState({
    name: { value: '', modified: false },
    lastName: { value: '', modified: false },
    address: { value: '', modified: false },
    email: { value: '', modified: false },
  });
  function updateData(field) {
    return function (event) {
      setFormData({
        ...formData,
        [field]: { value: event.target.value, modified: true },
      });
    };
  }

  async function onSubmit(cartId, event) {
    const data = Object.keys(formData).reduce(
      (acc, key) => ({
        ...acc,
        [key]: formData[key].value,
      }),
      {}
    );

    await updateCart(cartId, data);
    await postNewOrder(cartId);
    await postNewCart();

    cartId = localStorage.getItem('edgemony-cart-id');

    console.log(data);
    console.log(data.name);
    console.log(data.lastName);
    event.preventDefault();
  }

  return (
    <CheckoutContainer>
      <Form onSubmit={onSubmit}>
        <FormInputContainer>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <InputText
            type='text'
            value={formData.name.value}
            name='name'
            id='name'
            onChange={updateData('name')}
            className={formData.name.modified ? 'modified' : ''}
            required
          />
        </FormInputContainer>
        <FormInputContainer>
          <FormLabel htmlFor='lastName'>Last Name</FormLabel>
          <InputText
            type='text'
            value={formData.lastName.value}
            name='lastName'
            id='lastName'
            onChange={updateData('lastName')}
            className={formData.lastName.modified ? 'modified' : ''}
            required
          />
        </FormInputContainer>
        <FormInputContainer>
          <FormLabel htmlFor='address'>Address</FormLabel>
          <InputText
            type='text'
            value={formData.address.value}
            name='address'
            id='address'
            onChange={updateData('address')}
            className={formData.address.modified ? 'modified' : ''}
            required
          />
        </FormInputContainer>
        <FormInputContainer>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <InputText
            type='email'
            value={formData.email.value}
            name='email'
            id='email'
            className={formData.email.modified ? 'modified' : ''}
            onChange={updateData('email')}
            required
          />
        </FormInputContainer>
        <BasicBtn type='submit' onClick={onSubmit}>
          Invia
        </BasicBtn>
      </Form>
    </CheckoutContainer>
  );
}

export default Checkout;
