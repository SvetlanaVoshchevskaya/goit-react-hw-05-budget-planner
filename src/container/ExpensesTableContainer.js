import { connect } from 'react-redux';
import { deleteExpense } from '../redux/BudgetAction';
import ExpensesTable from '../components/ExpenseTable';

const mapStateToProps = state => ({ items: state.expenses });
const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(deleteExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
