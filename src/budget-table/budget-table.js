import React from 'react';
import Table from 'react-bootstrap/Table';
import { paymentMethods, paymentSources } from '../enums';

class BudgetTable extends React.Component {
  parseMethod(method) {
    return Object.keys(paymentMethods)
    .find(f => paymentMethods[f] == method);
  }

  parseSource(source) {
    return Object.keys(paymentSources)
    .find(f => paymentSources[f] == source);
  }

  parseTime(time) {
    const date = new Date(time);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` 
  }

  render() {
    const rows = this.props.data.map((m, i) =>           
      <tr key={i}>
        <td>
          {m.paidTo}
        </td>
        <td>{m.amount}</td>
        <td>{this.parseMethod(m.method)}</td>
        <td>{this.parseTime(m.date)}</td>
        <td>{this.parseSource(m.source)}</td>
      </tr>
    )

    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Paid To</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Date</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    )
  }
}

export default BudgetTable;
