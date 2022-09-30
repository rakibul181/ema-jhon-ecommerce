import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './products.css'


const Products = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart] = useState([])
    const [count, setCount] = useState(0)

    
    setCount(count+1)
    console.log(count)
    

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
                Selected Item:{cart.length}
            </div>
        </div>
    );
};

export default Products;