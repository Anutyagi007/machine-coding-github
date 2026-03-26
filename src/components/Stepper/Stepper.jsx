import React from 'react'

const Stepper = () => {
    const steps = [
    {
      label: 'Personal Info',
      content: <div>Personal Info Content</div>
    },
    {
      label: 'Account Info',
      content: <div>Account Info Content</div>
    },
    {
      label: 'Payment',
      content: <div>Payment Content</div>
    },
    {
      label: 'Confirmation',
      content: <div>Confirmation Content</div>
    },
    {
      label: 'Review',
      content: <div>Review Content</div>
    }
  ]
  return (
    <div>Stepper</div>
  )
}

export default Stepper