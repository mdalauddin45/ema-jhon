import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart,setCart]= useState([]);
 useEffect(()=>{
fetch('products.json')
.then (res=>res.json())
.then (data=> setProducts(data))
 },[]);

 const handleAddToCart =(product)=>{
    console.log(product);
const newCart = [...cart,product];
setCart(newCart);
 }
    return (
        <div className='shop-container'>
            <div className="product-container">
        {
            products.map(product=> <Product 
                key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
                ></Product> )
        }
            </div>
            <div className="cart-container">
            <h1 className='name-order'>Order Summary</h1>
            <p>Selected Items:{cart.length} </p>
            <p>Total Price:$ </p>
            <p>Total Shipping Charge:$ </p>
            <p>Tax:$ </p>
            <h3>Grand Total: $</h3>
            <button className='clear-cart-btn'>Clear Cart </button> 
            <br />
            <button className='review-order-btn'>Review Order</button>
            </div>
        </div>
    );
};

export default Shop;