import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart-cal'>
            <h2>Order Summary</h2>
            <div>
                <p>Selected Item:{cart.length}</p>
                <p>Total Price :$6</p>
                <p>Total Shipping Charge: ${}</p>
                <p>Tax: $114</p>
            </div>
            <p className='total-amount'>Grand Total: $1559</p>
  
        </div>
    );
};

export default Cart;