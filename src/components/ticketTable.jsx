import React, { Component } from "react";
import DTable from "./common/dTable";
import {Link} from "react-router-dom";
import { connect } from 'react-redux'; 
import { deleteTicket  } from '../actions/ticketActions';
import Moment from "react-moment";
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
      { path: "updatedAt", label: "Updated Date" 
      ,content:ticket=>
       <Moment  locale date={ticket.updatedAt} format="DD/MM/YYYY HH:mm"></Moment>
    },      
      {
        key: "delete",
        content: ticket => (
          <button  
           className="btn btn-danger btn-sm" 
           disabled={this.props.userRole !='Administrator'}
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
    userRole: state.authenticate?state.authenticate.userRole:'',
    userName: state.authenticate?state.authenticate.userName:'',    
    ticketTypes:state.tickets.types,    
    priorities:state.tickets.priorities  
  };
};
 
export default connect(mapStateToProps, {
  deleteTicket
  })(TicketTable);


