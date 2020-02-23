import React, { Component } from 'react';
import BudgetTable from './budget-table/budget-table'
import { rows } from './sample';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: rows
    }

    this.addNewRow = this.addNewRow.bind(this);
    this.editRow = this.editRow.bind(this);
  }

  getNewData() {
    // fetch("http://localhost:5000", { method: "GET" })
    // .then(response => response.json())
    // .then(dataFromBackend => this.setState({ data: dataFromBackend }));
  }
 
  removeRowFromData = index => {
    // fetch(`http://localhost:5000/${index}`, { method: "DELETE" })
    //   .then(r => {
    //     if (r.status === 200) {
    //       const dataCopy = [ ...this.state.data ]
    //       dataCopy.splice(index, 1)

    //       this.setState({
    //         data: dataCopy
    //       })
    //     }
    //   })
    //   .catch(e => console.log("error", e))
  }

  // addNewRow() {
  //   fetch(`http://localhost:5000`, {method: "POST"})
  //     .then(r => r.json())
  //     .then(r => r.getNewData())
  // }

  addNewRow(row) {
    this.setState({data: this.state.data.concat([{...row, id: this.state.data.length + 1}])});
  }

  editRow(row) {
    this.setState({data: this.state.data.map(m => m.id == row.id ? row : m)});
  }

  componentDidMount() {
    this.getNewData();
  }

  render() {
    return (
      <div className="App">
        {/* <div className="nav" style={{margin: "15px"}}>
          <Link to="/">
            Home
          </Link>
        </div> */}

        <Switch>
          <Route exact path="/" render={() => 
            <BudgetTable data={this.state.data}
                         addNewRow={this.addNewRow}
                         editRow={this.editRow}></BudgetTable>}/>
          <Route render={() => <div>You're lost!</div>}/>
        </Switch>
      </div>
    );
  }
}

export default App;