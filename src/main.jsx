import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importation du client ReactDOM pour React 18
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

// Utilisation de createRoot pour React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
