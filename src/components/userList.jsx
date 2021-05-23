import React, { Component,Fragment } from "react";
import UserTable from "./userTable";
import TablePagination from "./common/tablePagination";
import Search from "./common/search"
import { paginate } from "../util/paginate";
import {Table} from "reactstrap"
import { connect } from 'react-redux'; 
import _ from "lodash";
import { fetchUsers } from '../actions/userActions';


class UserList extends Component {
  state = {
    currentPage: 1,
    pageSize: 5,
    sortColumn: { path: "updatedAt", order: "asc" },
    search:"",
    users:[]
  };

  updateSearch=(e)=> {
    this.setState({ search: e.target.value });
  }
 
  async componentDidMount () {
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

  
  getPagedData = () => {
    const {
        pageSize,
        currentPage,
        sortColumn,
        search
        } = this.state;

    const allusers =this.props.users;   
    let filtered =
        this.state.search!==""  
        ? allusers.filter(x => x.name.toLowerCase().indexOf(search.toLowerCase())!==-1)
       : allusers;
        
     
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);    
    const users = paginate(sorted, currentPage, pageSize);
   
   return { totalCount: filtered.length, data: users };
  };

  render() {
   const { pageSize, currentPage, sortColumn} = this.state;
   const { totalCount, data: users } = this.getPagedData();
    return (
      <Fragment> 
         <Table style={{"border":"outset"}}>
             <tbody>
             <tr>
             <td>
               <Search
                value={this.state.search}
                onChange={this.updateSearch.bind(this)} 
                placeholder="Search By Name"         
              />   
               </td>
             </tr>
             </tbody>  
           </Table>
         <br/>
            {totalCount!==0?
               <Fragment>                  
                <UserTable
                  users={users}
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
                    <td> <b >Name</b>  </td>                  
                   </tr>
                   </thead>       
                   
                   <tbody >
                     <tr style={{textAlign:"center"}}>
                       <td> <label size="xs">user Not Found !! </label> </td>                    
                     </tr>
                   </tbody>                  
                </Table>  } 
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      // role: state.auth.role,     
      // user: state.auth.user,
      tickets: state.tickets.tickets,
      users: state.users.users,
    };
  };
   
  export default connect(mapStateToProps, {      
      fetchUsers
    })(UserList);