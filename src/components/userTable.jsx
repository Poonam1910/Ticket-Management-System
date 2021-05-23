import React, { Component } from "react";
import DTable from "./common/dTable";
import Moment from "react-moment";

class UserTable extends Component {  
 
    columns = [    
      {
        path: "name", label: "Name"},
      { path: "email", label: "Email" },
      { path: "role", label: "Role" },
      { path: "updatedAt", label: "Updated Date" 
     
      ,content:user=>
       <Moment  locale date={user.updatedAt} format="DD/MM/YYYY HH:mm"></Moment>
    },
  ];    

  render() {
    const { users,sortColumn,onSort} = this.props;
    return ( 
            <DTable
              columns={this.columns}
              data={users}        
              sortColumn={sortColumn}
              onSort={onSort}
            />
    );
  }
}

export default UserTable


