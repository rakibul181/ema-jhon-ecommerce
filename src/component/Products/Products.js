import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './products.css'
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import { useLoaderData } from 'react-router-dom';


const Products = () => {
    const products = useLoaderData()
    // console.log(products)
    const [cart,setCart] = useState([])
     
    useEffect(()=>{
        const storedCart = getStoredCart()
        const savedCart = []
        for (const id in storedCart) {
             const addedProducts = products.find(product => product.id === id)
             if(addedProducts){
                const quantity = storedCart[id]
                addedProducts.quantity = quantity
                savedCart.push(addedProducts)
             }
        }
        setCart(savedCart)
    },[products])

     
        const handleAddToCart = (product)=>{
            let newCart
            const exeistProduct = cart.find(newItem => cart.id === newItem.id)
            if(!exeistProduct){
                product.quantity = 1
                newCart = [...cart, product]
            }
            else{ 
                product.quantity = product.quantity +1
                newCart = [...cart, product]
            }
             setCart(newCart)
             addToDb(product.id)
        }
    return (
        <div className='shop-container'>
            <div className='prouct-container'>
                {
                    products.map(product=> <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart ={handleAddToCart}
                    ></Product> ) 
                }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;