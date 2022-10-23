import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css'

const Cart = ({cart}) => {
    const navigate = useNavigate()
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
            <Link to={'../order'}> <button>Chack Out</button></Link>
            <Link to={'../shipping'}> <button>Shipping</button></Link>
        </div>
    );
};

export default Cart;