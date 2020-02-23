import React from 'react';
import Form from 'react-bootstrap/Form';
import { paymentMethods, paymentSources } from '../enums';

const BudgetForm = (props) => {
  return (
    <Form>
        <Form.Row>
          <Form.Group controlId="paidTo">
              <Form.Label><b>Paid To</b></Form.Label>
              <Form.Control type="text" name="paidTo" placeholder="Chipotle" value={props.row.paidTo} onChange={(event) => props.onChildChange(event.target.name, event.target.value)} required></Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
              <Form.Label><b>Description</b></Form.Label>
              <Form.Control type="text" name="description" placeholder="Chicken Bowl" value={props.row.description} onChange={(event) => props.onChildChange(event.target.name, event.target.value)} required></Form.Control>
          </Form.Group>
          <Form.Group controlId="amount">
              <Form.Label><b>Amount</b></Form.Label>
              <Form.Control type="text" name="amount" placeholder="10.59" value={props.row.amount} onChange={(event) => props.onChildChange(event.target.name, event.target.value)} required></Form.Control>
          </Form.Group>
          <Form.Group controlId="method">
              <Form.Label><b>Method</b></Form.Label>
              <Form.Control as="select" name="method" value={props.row.method} onChange={(event) => props.onChildChange(event.target.name, event.target.value)} required>
                {Object.keys(paymentMethods).map(m => <option value={paymentMethods[m]} key={paymentMethods[m]}>{m}</option>)}
              </Form.Control>
          </Form.Group>
          <Form.Group controlId="date">
              <Form.Label><b>Date</b></Form.Label>
              <Form.Control type="text" name="date" value={props.row.date} onChange={(event) => props.onChildChange(event.target.name, event.target.value)} 
                            placeholder="8/19/2019" required></Form.Control>
          </Form.Group>
          <Form.Group controlId="source">
              <Form.Label><b>Source</b></Form.Label>
              <Form.Control as="select" name="source" value={props.row.source} onChange={(event) => props.onChildChange(event.target.name, event.target.value)} required>
                {Object.keys(paymentSources).map(m => <option value={paymentSources[m]} key={paymentSources[m]}>{m}</option>)}
              </Form.Control>
          </Form.Group>
        </Form.Row>
    </Form>
  );
}


export default BudgetForm;
