import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Order = () => {
    const{products,initialCart}=useLoaderData()
    const [cart, setCart] = useState(initialCart)
    console.log(cart)
    return (
        <div className='shop-container'>
            <div className='prouct-container'>
                 
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;