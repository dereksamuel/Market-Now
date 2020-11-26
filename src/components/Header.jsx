import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import AppContext from '../context/AppContext';

export default function Header() {
  const {
    state: { cart },
    addToCart,
  } = useContext(AppContext);

  return (
    <header className="Menu">
      <NavLink to="/" className="link">
        <h1>Market Now</h1>
      </NavLink>
      <nav className="Menu-nav">
        <ul className="Menu-list">
          <li className="Menu-list_item">
            <NavLink to="/checkout" className="link">
              <i className="fas fa-shopping-basket"></i>
            </NavLink>
            {cart.length > 0 && (
              <div className="Header-alert">{cart.length}</div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
