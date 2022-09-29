import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className='prouct-container'>
                {
                    products.map(product=> <Product 
                    key={product.id}
                    product={product}
                    ></Product> ) 
                }
            </div>
            <div className='cart-container'> cart</div>
        </div>
    );
};

export default Products;