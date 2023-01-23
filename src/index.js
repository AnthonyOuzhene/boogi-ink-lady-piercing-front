import React from 'react';

import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';
//import App from 'src/components/App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App />
        </Provider>
    </BrowserRouter>
);

