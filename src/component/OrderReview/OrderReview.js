import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderReview.css'

const OrderReview =(props) => {
    const {product,removeProductToCrat} = props
    const {id,img, price,name,quantity,shipping} = product
     
    // console.log(props);
    // console.log(removeProductToCrat);
    return (
        <div className='order-review'>
            <img src={img} alt="" />
            <div className='order-detail'>
                <div >
                    <p>{name}</p>
                    <p><small>price: {price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                    <p><small> Shipping: {shipping}</small></p>
                </div>
                <div>
                    <button onClick={()=>removeProductToCrat(id)} className='delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon> </button>
                </div>
            </div>
             
        </div>
        
    );
};

export default OrderReview;