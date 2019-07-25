import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import budgetReducer from './BudgetReducer';

const store = createStore(budgetReducer, devToolsEnhancer());

export default store;
