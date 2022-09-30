import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './products.css'


const Products = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart] = useState([])
     

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
        const handleAddToCart = (product)=>{
             const newcart = [...cart,product]
             setCart(newcart)
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