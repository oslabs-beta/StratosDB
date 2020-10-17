import React, { Component } from 'react'

interface TableState {
  resultTable1 : [];
  
}

class Table extends Component<{}, TableState> {

  render() {
    return (
      <div id="table">
    
<table>
  <tr>
    <th>_id</th>
    <th>item</th> 
    <th>description</th>
    <th>date</th>
    <th>status</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>
      </div>
    )
  }
}

export default Table;