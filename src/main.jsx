import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/popper.js';
import '../node_modules/jquery';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { Store } from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
    </BrowserRouter>
    
  </>
)
