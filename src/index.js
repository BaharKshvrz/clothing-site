import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import './index.scss';
import { CartProvider } from './contexts/cart.context';
import { ProductsProvider } from './contexts/products.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
       <CartProvider>
         <ProductsProvider>
            <App />
         </ProductsProvider>
        </CartProvider>
     </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
