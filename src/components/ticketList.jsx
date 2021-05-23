import React, { Component,Fragment } from "react";
import TicketTable from "./ticketTable";
import {Link} from "react-router-dom";
import TablePagination from "./common/tablePagination";
import Search from "./common/search"
import { paginate } from "../util/paginate";
import {Label, Table} from "reactstrap"
import { connect } from 'react-redux'; 
import _ from "lodash";
import { fetchTickets,addTicket,updateTicket ,deleteTicket  } from '../actions/ticketActions';
import Select from "react-select"
import { fetchUsers } from '../actions/userActions';
import DateSelector from "./common/datePicker"

class TicketList extends Component {
  
  state = {
    currentPage: 1,
    pageSize: 5,
    sortColumn: { path: "updatedAt", order: "asc" },
    search:"",
    selectedType:null,
    selectedPriority:null,
    taskTypes:[...this.props.ticketTypes,{ value: 4, label: "All Types" }],
    taskpriorities:[...this.props.priorities,{ value: 4, label: "All Priority" }],
    tickets:[],
    startDate:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()-7),
    endDate:new Date()    
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
            updatedAt:(ticket.updatedAt)            
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

  handleStartDateSelect=startDate=>{
    this.setState({ startDate });
  };
  handleEndDateSelect=endDate=>{   
    this.setState({ endDate });
  };

  handleStartDateChange=startDate=>{
    this.setState({ startDate });
  };

  handleEndDateChange=endDate=>{
    this.setState({ endDate });
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
      if (this.state.startDate && this.state.endDate)
      {
       filtered =  filtered.filter(m => new Date(m.updatedAt)>=this.state.startDate
               && new Date(m.updatedAt)<=this.state.endDate);
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
            {this.props.userRole==='Administrator'?
            <Link
              to={`/ticket/new`}
              className={`btn btn-primary ${this.props.auth &&
                this.props.userRole==='Administrator'?'':'disabled'}`}               
              style={{ marginBottom: 20 ,
                pointerEvents:`${this.props.userRole
                    &&this.props.userRole==='Administrator'?'all':'none'}`}}
              >
              Create Ticket
            </Link> :<><br/><br/></>}       
             
            
         <Table style={{"border":"outset"}}>
          <tbody>
            <tr id="tktFilter">
              <td>              
              <Select options = {this.state.taskTypes} id="tktTypeFilter"
              onChange={this.handleTicketTypeChange} 
              defaultValue={this.state.taskTypes[3]}
              />
              </td>
              <td>          
             <Select options = {this.state.taskpriorities} id="tktPriorityFilter"
              onChange={this.handlePriorityChange} 
              defaultValue={this.state.taskpriorities[3]}
              />
              </td>
                <td>
                  <Search
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} 
                    placeholder="Search By Title, Description and Project"         
                  />   
               </td>
              </tr>
              <tr>
                <td>
                <Label>Start Date &nbsp;</Label>
                <DateSelector
                  selected={this.state.startDate}
                  onSelect={this.handleStartDateSelect} 
                  onChange={this.handleStartDateChange} 
                  dateFormat='dd/MM/yyyy'/>
                </td>
                <td>
                <Label>End Date&nbsp;</Label>
                <DateSelector
                  selected={this.state.endDate}
                  onSelect={this.handleEndDateSelect} 
                  onChange={this.handleEndDateChange} 
                  minDate={this.state.startDate}
                  dateFormat='dd/MM/yyyy'/>
                </td>
                <td></td>
               
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
                <Table striped bordered > 
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
      userRole: state.authenticate?state.authenticate.userRole:'',
      userName: state.authenticate?state.authenticate.userName:'',
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