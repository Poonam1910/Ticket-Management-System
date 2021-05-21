import React, { Component,Fragment } from "react";
import TicketTable from "./ticketTable";
import {Link} from "react-router-dom";
import TablePagination from "./common/tablePagination";
import Search from "./common/search"
import { paginate } from "../util/paginate";
import {Table} from "reactstrap"
import { connect } from 'react-redux'; 
import _ from "lodash";
import { fetchTickets,addTicket,updateTicket ,deleteTicket  } from '../actions/ticketActions';
import Select from "react-select"
import { fetchUsers } from '../actions/userActions';


class TicketList extends Component {
  state = {
    currentPage: 1,
    pageSize: 2,
    sortColumn: { path: "updatedAt", order: "asc" },
    search:"",
    selectedType:null,
    selectedPriority:null,
    taskTypes:[...this.props.ticketTypes,{ value: 4, label: "All Types" }],
    taskpriorities:[...this.props.priorities,{ value: 4, label: "All Priority" }],
    tickets:[]
  };

  updateSearch=(e)=> {
    this.setState({ search: e.target.value });
  }
 
  async componentDidMount () {
   this.props.fetchTickets(); 
   this.props.fetchUsers();  
  }

  mapToVMTicketList=()=> {    
  let vmtickets= this.props.tickets.map((ticket)=>{ 
    const assignee=this.props.users.filter(x=>x._id===ticket.assigneeId)[0]; 
        return {
               _id:ticket._id,
                title:ticket.title,
                description:ticket.description,
                assigneeId: {
                    _id:ticket.assigneeId,
                     name: assignee?assignee.name:""
                    },
                projectName:ticket.projectName,
                priorityId:this.props.priorities.filter(x=>x.value===ticket.priorityId)[0],
                typeId:this.props.ticketTypes.filter(x=>x.value===ticket.typeId)[0],
                statusId:this.props.statuses.filter(x=>x.value===ticket.statusId)[0] ,
                updatedAt:ticket.updatedAt//Date(ticket.updatedAt).ToString().slice(0, 33)               
              }
  });
    return vmtickets;
  }

  handlePageChange = page => {
   this.setState({ currentPage: page });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleTicketTypeChange= (selectedType)=>{
   this.setState({selectedType});
  };

  handlePriorityChange= (selectedPriority)=>{
    this.setState({selectedPriority});
   };

  getPagedData = () => {
    const {
        pageSize,
        currentPage,
        sortColumn,
        search
        } = this.state;

    const allTickets =this.mapToVMTicketList();   
    let filtered =
        this.state.search!==""  
        ? allTickets.filter(x => x.title.toLowerCase().indexOf(search.toLowerCase())!==-1||
        x.description.toLowerCase().indexOf(search.toLowerCase())!==-1||
        x.projectName.toLowerCase().indexOf(search.toLowerCase())!==-1)
       : allTickets;
        
       if (this.state.selectedType && this.state.selectedType.value!==4)
       {
        filtered = filtered.filter(m => m.typeId &&
                     m.typeId.value === this.state.selectedType.value);
       }
       if (this.state.selectedPriority && this.state.selectedPriority.value!==4)
       {
        filtered =  filtered.filter(m => m.priorityId &&
            m.priorityId.value === this.state.selectedPriority.value);
    }
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);    
    const tickets = paginate(sorted, currentPage, pageSize);
   
   return { totalCount: filtered.length, data: tickets };
  };

  render() {
   const { pageSize, currentPage, sortColumn} = this.state;
   const { totalCount, data: tickets } = this.getPagedData();
    return (
      <Fragment> 
            {this.props.role==='Administrator'?
            <Link
              to={`/ticket/new`}
              className={`btn btn-primary ${this.props.auth &&
                this.props.role==='Administrator'?'':'disabled'}`}               
              style={{ marginBottom: 20 ,
                pointerEvents:`${this.props.role
                    &&this.props.role==='Administrator'?'all':'none'}`}}
              >
              Create Ticket
            </Link>  :<><br/><br/></>}       
             
            
         <Table style={{"border":"outset"}}>
             <tbody>
             <tr id="tktFilter">
              <td>
              <Select options = {this.state.taskTypes}
              onChange={this.handleTicketTypeChange} 
              defaultValue={this.state.taskTypes[3]}
              />
           </td>
           <td>           
            <Select options = {this.state.taskpriorities} 
           onChange={this.handlePriorityChange} 
           defaultValue={this.state.taskpriorities[3]}
           />
                </td>
                <td><Search
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}          
         />    </td>
             </tr>
             </tbody>  
           </Table>
         <br/>
            {totalCount!==0?
               <Fragment>                  
                <TicketTable
                  tickets={tickets}
                  sortColumn={sortColumn}
                  onSort={this.handleSort}
                />               
                <TablePagination
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                /> 
                </Fragment>: 
                <Table striped bordered dark > 
                   <thead style={{backgroundColor:"lightsteelblue", color:"black"}}> 
                   <tr style={{textAlign:"center"}}>                     
                    <td> <b >Title</b>  </td>                  
                   </tr>
                   </thead>       
                   
                   <tbody >
                     <tr style={{textAlign:"center"}}>
                       <td> <label size="xs">Ticket Not Found !! </label> </td>                    
                     </tr>
                   </tbody>                  
                </Table>  } 
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      role: state.auth.role,
      user: state.auth.user,
      tickets: state.tickets.tickets,
      users: state.users.users,
      ticketTypes:state.tickets.types,
      selectedTask:state.tickets.selectedTask,
      priorities:state.tickets.priorities  ,      
      statuses:state.tickets.statuses,   
    };
  };
   
  export default connect(mapStateToProps, {
      fetchTickets,
      addTicket,
      updateTicket,
      deleteTicket,
      fetchUsers
    })(TicketList);