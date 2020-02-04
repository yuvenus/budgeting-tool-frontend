import React from 'react';
import Form from 'react-bootstrap/Form';
import { paymentMethods } from '../enums';

class BudgetForm extends React.Component {
  render() {
    
    return (
      <Form>
          <Form.Row>
            <Form.Group controlId="paidTo">
                <Form.Label><b>Paid To</b></Form.Label>
                <Form.Control type="text" placeholder="Chipotle" required></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label><b>Description</b></Form.Label>
                <Form.Control type="text" placeholder="Chicken Bowl" required></Form.Control>
            </Form.Group>
            <Form.Group controlId="amount">
                <Form.Label><b>Amount</b></Form.Label>
                <Form.Control type="text" placeholder="10.59" required></Form.Control>
            </Form.Group>
            <Form.Group controlId="method">
                <Form.Label><b>Method</b></Form.Label>
                <Form.Control type="text" placeholder="credit" required></Form.Control>
            </Form.Group>
            <Form.Group controlId="date">
                <Form.Label><b>Date</b></Form.Label>
                <Form.Control type="text" placeholder="8/19/2019" required></Form.Control>
            </Form.Group>
            <Form.Group controlId="source">
                <Form.Label><b>Source</b></Form.Label>
                <Form.Control type="text" placeholder="me" required></Form.Control>
            </Form.Group>
          </Form.Row>
      </Form>
    )
  }
}

export default BudgetForm;
