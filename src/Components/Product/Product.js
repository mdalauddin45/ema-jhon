import React from 'react';
import './Product.css'                        

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
           <button className='btn' onClick={()=> handleAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;