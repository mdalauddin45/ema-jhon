import React from 'react';
import './Product.css'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'                      

const Product = (props) => {
   const {handleAddToCart,product}=props;
    const{img, name, price,ratings, seller}=props.product;
    return (
        <div className='product-containers'>
           <img src={img} alt="" /> 
          <div className='info'>
          <p className='name'>{name}</p>
           <p> Price: ${price}</p>
           <p> Manufacturer: {seller} <br /> Rating: {ratings} </p>
          </div>
           <button className='btn' onClick={()=> handleAddToCart(product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> 
</button> 
        </div>
    );
};

export default Product;