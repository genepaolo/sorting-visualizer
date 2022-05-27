import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';
import sortReducer from "./reducers/sortReducer";
import themeReducer from "./reducers/themeReducer";
import {Provider} from 'react-redux';

const reducer = {
  sort:sortReducer,
  theme:themeReducer
}

let store = configureStore({reducer},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// Store

// Action, returns object



// store.subscribe(() => console.log(store.getState()));

// //  Dispatch
// store.dispatch(chooseSort("MERGE"));
// store.dispatch(chooseTheme("DARK"));
