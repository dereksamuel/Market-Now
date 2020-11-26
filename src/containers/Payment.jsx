import React, { useContext, useState } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';
import methods from '../utils/methods';

export default function Payment() {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);
  const [startPayment, setStartPayment] = useState(false);
  const history = useHistory();

  const paypalOptions = {
    clientId:
      'AdCHWwqeUSm2oGrx3Vbjf9xHyKMcwLIXlZ4PA241Shqiao9QlbeE8WwpByQZ4o35PcIEuLpdg4Ft-Dbd',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
    color: 'black',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  if (startPayment) return <h3>Iniciando el pago... espere</h3>;
  return (
    <div className="Payment">
      <h2>Resumen del pedido:</h2>
      <div className="Payment-items">
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div className="Payment-item-in">
              <h2 className="badge__title">
                {item.title}
                <span>$ {item.price}</span>
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={methods.handlePlusTotal(cart)}
          onPaymentStart={() => {
            setStartPayment(true);
            console.log('Start payment');
          }}
          onPaymentSuccess={(data) => handlePaymentSuccess(data)}
          onPaymentError={(error) => console.error('DK ERROR', error)}
          onPaymentCancel={(data) => console.wraning(data)}
        />
      </div>
    </div>
  );
}
