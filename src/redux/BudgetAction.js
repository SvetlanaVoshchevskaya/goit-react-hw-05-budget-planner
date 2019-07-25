import shortid from 'shortid';
import {
  ADD_TOTAL_BUDGET,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
} from './BudgetActionType';

export const addSummBudget = value => ({
  type: ADD_TOTAL_BUDGET,
  payload: value,
});

export const addExpense = (name, amount) => ({
  type: ADD_EXPENSE,
  payload: { id: shortid(), name, amount: Number(amount) },
});

export const deleteExpense = id => ({
  type: REMOVE_EXPENSE,
  payload: id,
});
