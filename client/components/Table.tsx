import React from 'react';

interface TableProps {
  queryTable: [];
}

const Table: React.FC<TableProps> = (props: TableProps) => {
  // QUERYTABLE: ARRAY OF OBJECTS (OUR RETURNED QUERY)
  const queryTable: any = props.queryTable;

  // TABLE HEADER: ARRAY OF COLUMN NAMES
  const tableHeader: any =
    queryTable.length === 0 ? null : Object.keys(queryTable[0]);

  // FUNCTION THAT WILL RETURN OUR TABLE HEADER WITH OUR COLUMN NAMES
  const tableHeaderCreator = () => {
    // IF TABLEHEADER HAS ONE ELEMENT OR MORE
    if (tableHeader) {
      return tableHeader.map((el: any, index: number) => {
        return <th key={index}>{el}</th>;
      });
    }
  };

  // FUNCTION THAT WILL RETURN OUR TABLE BODY ROWS
  const tableBodyCreator = () => {
    // FUNCTION THAT WILL RETURN OUR TABLE BODY DATA CELLS
    const iteratorFunc = (array: any) => {
      return array.map((values: any, index: number) => {
        return <td key={index}>{values}</td>;
      });
    };
    // IF TABLEHEADER HAS ONE ELEMENT OR MORE
    if (tableHeader) {
      return queryTable.map((obj: any, index: number) => {
        const target = Object.values(obj);
        // INVOKES OUR ITERATORFUNC FUNCTION THAT WILL GENERATE OUR TABLE DATA CELLS
        return (
          <tr className="result-table-body" key={index}>
            {iteratorFunc(target)}
          </tr>
        );
      });
    }
  };

  return (
    <div id="table">
      <table id="result-table">
        <tbody>
          <tr id="result-table-header">{tableHeaderCreator()}</tr>
          {tableBodyCreator()}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
