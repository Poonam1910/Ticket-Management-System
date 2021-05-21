import React, { Component } from "react";
import DTable from "./common/dTable";
import { connect } from 'react-redux'; 
import { deleteTicket  } from '../actions/ticketActions';

class UserTable extends Component {  
 
    columns = [    
      {
        path: "name", label: "Name"},
      { path: "email", label: "Email" },
      { path: "role", label: "Role" },
      { path: "updatedAt", label: "Updated Date" }
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

 
const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    department: state.auth.department,
    user: state.auth.user,
    ticketTypes:state.tickets.types,    
    priorities:state.tickets.priorities  
  };
};
 
export default connect(mapStateToProps, {
  deleteTicket
  })(UserTable);


