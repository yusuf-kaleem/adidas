import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
