import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart)
    let total = 0
    let shiping = 0
    let quantity = 0
    for(const product of cart){
        total = total + product.price * product.quantity
        shiping = shiping + product.shipping
        quantity =  quantity  + product.quantity
    }
    const tax = (total *(0.01)).toFixed(2)

    const totalCost = total + shiping + parseFloat(tax)

  
    
    

    return (
        <div className='cart-cal'>
            <h2>Order Summary</h2>
            <div>
                <p>Selected Item:{quantity}</p>
                <p>Total Price :${total}</p>
                <p>Total Shipping Charge: ${shiping}</p>
                <p>Tax: ${tax}</p>
            </div>
            <p className='total-amount'>Grand Total: ${totalCost}</p>
  
        </div>
    );
};

export default Cart;