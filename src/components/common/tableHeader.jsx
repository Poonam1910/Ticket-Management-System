import React, { Component } from "react";


class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
   if (sortColumn.path === path){
    sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
   }     
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    if(this.props.onSort)
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const {sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      
      <thead style={{backgroundColor:"lightsteelblue", color:"black"}}>        
        <tr>
          {this.props.columns.map(column => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
             <i>{column.label}</i>  {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
