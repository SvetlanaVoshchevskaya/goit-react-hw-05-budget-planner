import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { addExpense } from '../redux/BudgetAction';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.amount === '' || this.state.amount < 0) {
      toast.error('Введена сумма меньше 0', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (this.state.name === '') {
      toast.error('Незаполнено поле expense name ', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    this.props.addExpense({
      ...this.state,
    });

    this.setState({ name: '', amount: '' });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>
        <Button label="Add" type="submit" />
        <ToastContainer autoClose={2000} />
      </Form>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addExpense: ({ name, amount }) => dispatch(addExpense(name, amount)),
});
ExpenseForm.propTypes = { addExpense: PropTypes.func.isRequired };

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
