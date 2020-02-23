import React from "react";
import Table from "react-bootstrap/Table";
import BudgetForm from "./budget-form";
import { paymentMethods, paymentSources } from "../enums";
import { Sidebar } from "primereact/sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class BudgetTable extends React.Component {
  
  newRow = {
    paidTo: '',
    description: '',
    amount: '',
    method: paymentMethods.credit,
    date: '',
    source: paymentSources.self
  }

  state = {
    viewSidebar: false,
    curRow: this.newRow
  };

  tableAddNewRow(row) {
    this.props.addNewRow(row);
  }

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

  toggleSidebar = (row, isEdit) => {
    this.setState({
      viewSidebar: !this.state.viewSidebar,
      edit: isEdit,
      curRow: JSON.parse(JSON.stringify(row)),
    });
  };

  onChildChange = (name, value) => {
    this.setState({    
      viewSidebar: this.state.viewSidebar,
      edit: this.state.edit,
      curRow: {...this.state.curRow, [`${name}`]: value}
    });
  }

  onHide = () => {
    this.setState({
      viewSidebar: false,
      edit: false,
      curRow: this.newRow
    });
  };

  saveClicked = () => {
    this.state.edit ? this.props.editRow(JSON.parse(JSON.stringify(this.state.curRow))) : this.props.addNewRow(JSON.parse(JSON.stringify(this.state.curRow)));
    this.onHide();
  }

  render() {
    const rows = this.props.data.map((m) => (
      <tr key={m.id}>
        <td>
          <div className="info">
            <span className="headline">{m.paidTo}</span>
            <span className="subline">{m.description}</span>
          </div>  
        </td>
        <td>${m.amount}</td>
        <td>{this.parseMethod(m.method)}</td>
        <td>{this.parseTime(m.date)}</td>
        <td>{this.parseSource(m.source)}</td>
        <td><button className="button table-button" onClick={() => this.toggleSidebar(m, true)}><FontAwesomeIcon icon={faEdit} /></button></td>
      </tr>
    ));

    return (
      <div className="budget-table-wrapper"> 
        <button className="button add" onClick={() => this.toggleSidebar(this.newRow, false)}>Add New Row</button>

        <Sidebar visible={this.state.viewSidebar} onHide={this.onHide}>
          <div className="sidebar">
            <div className="sidebar-content">
              <BudgetForm tableAddNewRow={this.tableAddNewRow} row={this.state.curRow} onChildChange={(name, value) => this.onChildChange(name, value)}></BudgetForm>
            </div>
            <div className="sidebar-buttons">
              <button className="button" onClick={this.saveClicked}>Save</button>
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
                <th>Actions</th>
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
