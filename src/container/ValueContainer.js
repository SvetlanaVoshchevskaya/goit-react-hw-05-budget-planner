import { connect } from 'react-redux';
import * as selector from '../components/selectors/BudgetSelector';
import Value from '../components/Value';

const mapStateToProps = state => ({
  budget: state.budget,
  expenses: selector.calculateTotalExpenses(state),
  balance: selector.calculateBalance(state),
});
export default connect(
  mapStateToProps,
  null,
)(Value);
