import React, { Component } from 'react';
import BudgetTable from './budget-table/budget-table'
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    data: []
  }

  getNewData() {
    fetch("http://localhost:5000", { method: "GET" })
    .then(response => response.json())
    .then(dataFromBackend => this.setState({ data: dataFromBackend }))
  }
 
  removeRowFromData = index => {
    fetch(`http://localhost:5000/${index}`, { method: "DELETE" })
      .then(r => {
        if (r.status === 200) {
          const dataCopy = [ ...this.state.data ]
          dataCopy.splice(index, 1)

          this.setState({
            data: dataCopy
          })
        }
      })
      .catch(e => console.log("error", e))
  }

  addNewRow() {
    fetch(`http://localhost:5000`, {method: "POST"})
      .then(r => r.json())
      .then(r => r.getNewData())
  }

  componentDidMount() {
    this.getNewData();
  }

  render() {
    return (
      <div className="App">
        <div className="nav" style={{margin: "15px"}}>
          <Link to="/">
            Home
          </Link>
        </div>

        <Switch>
          <Route exact path="/" render={() => 
            <BudgetTable data={this.state.data} 
                         removeRowFromData={this.removeRowFromData}
                         addNewRow={this.addNewRow}></BudgetTable>}/>
          <Route exact path="/fuck" render={() => <div style={{textAlign: "center", color: "red", fontSize: "50px"}}>nuts!</div>}/>
          <Route render={() => <div>You're lost!</div>}/>
        </Switch>
      </div>
    );
  }
}

export default App;