import React, { Component } from 'react'

interface TableProps {
  queryTable : [];
  
}

class Table extends Component<TableProps> {
  constructor(props: TableProps) {
    super(props)
  }
  
  render() {
    const { queryTable } = this.props
    console.log("this is from table", this.props.queryTable)
    return (
      <div id="table">
       <div>
         
         </div>
{/*     
<table>
  <tr>
    <th>_id</th>
    <th>item</th> 
    <th>description</th>
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
</table> */}
      </div>
    )
  }
}

export default Table;