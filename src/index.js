import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


const defaultState={
  cash:0,
}

const reducer=(state=defaultState, action)=>{
  switch(action.type){
    case "ADD_CASH": 
      return{...state, cash:state.cash+action.payload}
      case "GET_CASH": 
      return{...state, cash:state.cash-action.payload} 
      default:
      return state   
  }
}


const store= configureStore({reducer})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
