import React, { Component } from "react";
import DTable from "./common/dTable";
import {Link} from "react-router-dom";
import { connect } from 'react-redux'; 
import { deleteTicket  } from '../actions/ticketActions';

class TicketTable extends Component {  
 
    columns = [    
      {
        path: "title",
        label: "Title",
        content: ticket => <Link to={`/ticket/${ticket._id}`}>
          {ticket.title}</Link>
      },
      { path: "typeId.label", label: "Type" },
      { path: "description", label: "Description" },
      { path: "priorityId.label", label: "Priority" },
      { path: "projectName", label: "ProjectName" },
      { path: "assigneeId.name", label: "Assigned To" },
      { path: "statusId.label", label: "Status" },
      { path: "updatedAt", label: "Updated Date" },      
      {
        key: "delete",
        content: ticket => (
          <button  
           className="btn btn-danger btn-sm" 
           disabled={this.props.role ==='user'}
           onClick={() => {
              if (window.confirm('Are you sure you want to delete this Ticket?'))
              this.props.deleteTicket(ticket._id)}}           
          >
           Delete
          </button>
         
        )
      }
  ];    

  render() {
    const { tickets,sortColumn,onSort} = this.props;
    return ( 
            <DTable
              columns={this.columns}
              data={tickets}        
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
  })(TicketTable);


