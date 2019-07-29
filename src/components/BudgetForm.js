import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { addSummBudget } from '../redux/BudgetAction';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  state = { budget: '' };

  handleChange = e => {
    this.setState({
      budget: +e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.budget === '' || this.state.budget < 0) {
      toast.error('Введите  вполе budget  сумму больше 0', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    this.props.addSummBudget(this.state.budget);

    this.setState({ budget: '' });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>
        <Button label="Save" type="submit" />
        <ToastContainer autoClose={2000} />
      </Form>
    );
  }
}

const MDTP = dispatch => ({
  addSummBudget: value => dispatch(addSummBudget(value)),
});

BudgetForm.propTypes = { addSummBudget: PropTypes.func.isRequired };
export default connect(
  null,
  MDTP,
)(BudgetForm);
