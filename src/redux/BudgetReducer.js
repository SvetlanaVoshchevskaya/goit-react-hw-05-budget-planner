import {
  ADD_TOTAL_BUDGET,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
} from './BudgetActionType';

const initialState = {
  budget: 0,
  expenses: [],
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOTAL_BUDGET:
      return { ...state, budget: action.payload };
    case ADD_EXPENSE:
      return { ...state, expenses: [...state.expenses, action.payload] };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          expense => expense.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default budgetReducer;
