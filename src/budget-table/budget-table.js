import React from 'react';
import Table from 'react-bootstrap/Table';

class BudgetTable extends React.Component {

  render() {
    const rows = this.props.data.map(m =>           
      <tr>
        <td>{m.to}</td>
        <td>{m.amount}</td>
        <td>{m.method}</td>
        <td>{m.date}</td>
        <td>{m.source}</td>
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
