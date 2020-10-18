import React, { Component } from 'react';

interface TableProps {
  queryTable: [];
  // tableHeader: any;
}

const Table: React.FC<TableProps> = (props: TableProps) => {
  // QUERYTABLE: ARRAY OF OBJECTS (OUR RETURNED QUERY)
  const queryTable: any = props.queryTable;
  // const headerResults: any = props.tableHeader;
  // console.log(headerResults);

  // TABLE HEADER: ARRAY OF COLUMN NAMES
  const tableHeader: any =
    queryTable.length === 0 ? null : Object.keys(queryTable[0]);

  const tableHeaderCreator = () => {
    // IF TABLEHEADER HAS ONE ELEMENT OR MORE
    if (tableHeader) {
      return tableHeader.map((el: any, index: number) => {
        return <th key={index}>{el}</th>;
      });
    }
  };

  const tableBodyCreator = () => {
    const iteratorFunc = (array: any) => {
      return array.map((values: any, index: number) => {
        return <td key={index}>{values}</td>;
      });
    };
    // IF TABLEHEADER HAS ONE ELEMENT OR MORE
    if (tableHeader) {
      return queryTable.map((obj: any, index: number) => {
        const target = Object.values(obj);
        return <tr key={index}>{iteratorFunc(target)}</tr>;
      });
    }
  };

  return (
    <div id="table">
      <p>hello</p>
      <table>
        <tbody>
          <tr>{tableHeaderCreator()}</tr>
          {tableBodyCreator()}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
