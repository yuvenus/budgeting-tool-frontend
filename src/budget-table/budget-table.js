import React from "react";
import Table from "react-bootstrap/Table";
import BudgetForm from "./budget-form";
import { paymentMethods, paymentSources } from "../enums";
import { Sidebar } from "primereact/sidebar";

class BudgetTable extends React.Component {
  state = {
    viewSidebar: false
  };

  parseMethod(method) {
    return Object.keys(paymentMethods).find(f => paymentMethods[f] == method);
  }

  parseSource(source) {
    return Object.keys(paymentSources).find(f => paymentSources[f] == source);
  }

  parseTime(time) {
    const date = new Date(time);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  toggleSidebar = () => {
    this.setState({
      viewSidebar: !this.state.viewSidebar
    });
  };

  onHide = () => {
    this.setState({
      viewSidebar: false
    });
  };

  render() {
    const rows = this.props.data.map((m, i) => (
      <tr key={i}>
        <td>{m.paidTo}</td>
        <td>{m.amount}</td>
        <td>{this.parseMethod(m.method)}</td>
        <td>{this.parseTime(m.date)}</td>
        <td>{this.parseSource(m.source)}</td>
      </tr>
    ));

    return (
      <div>
        <button onClick={this.toggleSidebar}>show sidebar?</button>

        <Sidebar visible={this.state.viewSidebar} onHide={this.onHide}>
          <div className="sidebar">
            <div className="sidebar-content">
              <BudgetForm></BudgetForm>
            </div>
            <div className="sidebar-buttons">
              <button>save :)</button>
            </div>
          </div>
        </Sidebar>

        <div className="budget-table">
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
            <tbody>{rows}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default BudgetTable;
