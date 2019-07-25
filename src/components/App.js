import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from '../container/ExpensesTableContainer';
import Value from '../container/ValueContainer';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {
  removeExpense = id => {
    this.setState(state => ({
      expenses: state.expenses.filter(expense => expense.id !== id),
    }));
  };

  render() {
    const { expenses } = this.props;
    return (
      <Container>
        <BudgetForm />
        <Value />
        <ExpenseForm />
        {expenses.length > 0 && <ExpensesTable />}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  budget: state.budget,
  expenses: state.expenses,
});
App.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(App);
