import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';
import methods from '../utils/methods';

export default function Checkout() {
  const {
    state: { cart },
    removeToCart,
  } = useContext(AppContext);

  const handleRemove = (product) => {
    removeToCart(product);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>
          {cart.length > 0 ? (
            <span>Lista de pedidos:</span>
          ) : (
            <span>Sin pedidos</span>
          )}
        </h3>
        {cart.map((item) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4
                style={{
                  boxShadow: '0px 1px 0.1px 0px #515151',
                  flex: '1 1 auto',
                }}
              >
                {item.title}
              </h4>
              <span>
                $ {item.price}
                <button
                  className="btn btn-outline-danger ml-2"
                  type="button"
                  onClick={() => handleRemove(item)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total: $ ${methods.handlePlusTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button className="btn" type="button">
              Continuar pedido
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
