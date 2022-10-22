import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Order = () => {
    const{initialCart}=useLoaderData()
    const [cart, setCart] = useState(initialCart)
    // console.log(cart)

    const removeProductToCrat=(id)=>{
        const reminingProduct = cart.filter(product => product.id!==id)
        setCart(reminingProduct)
        removeFromDb(id)
        // console.log(reminingProduct)
    }
    return (
        <div className='shop-container'>
            <div className='order-container'>
                 {
                    cart.map(product => <OrderReview key={product.id} product={product}  removeProductToCrat={removeProductToCrat}></OrderReview>)
                 }
            </div>
            <div className='cart-container'>
               <Cart 
               cart={cart}
              
               ></Cart>
            </div>
        </div>
    );
};

export default Order;