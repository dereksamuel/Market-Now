import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Product-item">
      <img src={product.image} alt={product.title} />
      <figcaption className="Product-item-in">
        <h2 className="badge__title">
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <div className="content">
          <p>{product.description}</p>
          <button
            type="button"
            className="btn"
            onClick={() => handleAddToCart(product)}
          >
            Comprar
          </button>
        </div>
      </figcaption>
    </div>
  );
};

export default Product;
