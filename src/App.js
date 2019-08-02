import React from 'react';
import BudgetTable from './budget-table/budget-table'
import './App.css';

function App() {
  const mockData = [{
    to: 'chipotle',
    amount: '10.59',
    method: 'credit', // make into an enum probably
    date: '10/10/10',
    source: 'me' // also make into an enum
  }];

  return (
    <div className="App">
      <BudgetTable data={mockData}></BudgetTable>
    </div>
  );
}

export default App;
