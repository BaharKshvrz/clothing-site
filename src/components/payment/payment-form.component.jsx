import React from 'react'
import Button, {BUTTON_TYPE_CLASSES} from '../../components/button/button.component'
import {CardElement} from '@stripe/react-stripe-js';

const PaymentForm = () => {
  return (
    <>
    <CardElement/>
     <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Shop Now</Button>
      
    </>
  )
}

export default PaymentForm
