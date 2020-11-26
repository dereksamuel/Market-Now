import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <article className="Information-head">
          <h2>Información de contacto:</h2>
        </article>
        <form
          id="general_data"
          className="Information-form"
          required
          ref={form}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            required
            id="name"
            placeholder="Nombre completo"
          />
          <input
            type="email"
            name="email"
            required
            id="email"
            placeholder="Correo electrónico"
          />
          <input
            type="text"
            name="address"
            required
            id="address"
            placeholder="Dirección"
          />
          <input
            type="text"
            name="apto"
            id="apto"
            placeholder="Apto"
            required
          />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Ciudad"
            required
          />
          <input
            type="text"
            name="country"
            id="country"
            placeholder="País"
            required
          />
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Estado"
            required
          />
          <input
            type="text"
            name="cp"
            max="6"
            id="cp"
            placeholder="Código postal"
            required
          />
          <input
            type="text"
            name="phone"
            id="phone"
            max="10"
            placeholder="Teléfono"
            required
          />
        </form>
      </div>
      <div className="Information-buttons">
        <Link to="/checkout">
          <button className="btn">Regresar</button>
        </Link>
        <button className="btn" type="submit" form="general_data">
          Pagar
        </button>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <h4>{item.title}</h4>
            <span>$ {item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
