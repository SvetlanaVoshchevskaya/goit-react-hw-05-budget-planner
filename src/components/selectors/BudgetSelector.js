export const getExpenses = state => state.expenses;
export const getBudgetSumm = state => state.budget;

export const getExpensesAmount = state => state.expenses.amount;

export const calculateTotalExpenses = state => {
  const expenses = getExpenses(state);
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const calculateBalance = state => {
  const expenses = calculateTotalExpenses(state);
  const budget = getBudgetSumm(state);
  return budget - expenses;
};
