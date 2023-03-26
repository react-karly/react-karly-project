import ReactDOM from 'react-dom';

function ShippingModalWrapper({ children }) {
  const el = document.getElementById('shipping-modal');
  return ReactDOM.createPortal(children, el);
}

export default ShippingModalWrapper;
