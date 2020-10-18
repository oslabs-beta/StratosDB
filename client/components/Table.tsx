import React, { Component } from 'react';

interface TableProps {
  queryTable: [];
  tableHeader: any;
}

const Table: React.FC<TableProps> = (props: TableProps) => {
  const queryTable: any = props.queryTable;
  const headerResults: any = props.tableHeader;
  // console.log(headerResults);
  return (
    <div id='table'>
      <p>hello</p>
      <table>
        <tr>
          <thead>{headerResults}</thead>
        </tr>
      </table>
    </div>
  );
};

export default Table;
