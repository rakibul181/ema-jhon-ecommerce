import React from 'react';
import './product.css'

const Product = (props) => {
    const{category,id,img,name,price,quantity,ratings,stock} = props.product 
    return (
        <div className='product'>
            <img src={img} alt={'this is:' +name} />
        </div>
    );
};

export default Product;