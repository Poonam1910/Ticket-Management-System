
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import React from 'react';
import { Table } from "reactstrap";
const DTable = ({columns,sortColumn,onSort,data}) => {
    return (
       <Table striped bordered dark > 
            <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort}/>
            <TableBody columns={columns} data={data} />
        </Table>
        
      );
};
 
export default DTable;

