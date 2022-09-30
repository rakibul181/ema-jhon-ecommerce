import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
     
    const{img,name,price,seller,ratings} = props.product 
    return (
        <div className='product'>
            <img src={img} alt={'this is:' +name} />
            <div className='product-info-all'>
            <p className='product-name'>{name}</p>
            <p className='price'>Price :${price}</p>
            <div className='product-info'>
                <p>Seller :{seller}</p>
                <p>Ratting :{ratings} star</p>
            </div>
            </div>
            <div onClick={()=>props.handleAddToCart(props.product)} className='cart'>Add to Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></div>
        </div>
    );
};

export default Product;