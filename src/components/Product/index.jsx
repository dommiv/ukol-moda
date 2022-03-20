import React from 'react';
import './style.css';


const Product = ({image, name, description, price}) => {
    return (
        <div className="product">
        <img 
            className="product_image" 
            src={image} 
        />
            <div className="product__content">
                <h2 className="product__name">{name}</h2>
                <p className="product__description">{description}</p>
                <p className="product__price">{price}</p>
            </div>
        </div>
    );
};

export default Product 

