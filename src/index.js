import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BudgetStore from './redux/BudgetStore';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <Provider store={BudgetStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
