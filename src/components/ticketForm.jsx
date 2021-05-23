import  React  from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { Badge,Row,Col,Container} from "reactstrap"
import { fetchTicket,addTicket,updateTicket } from '../actions/ticketActions';
import { fetchUsers } from '../actions/userActions';
import { connect } from 'react-redux';

class TicketForm extends Form {
  state = {
    data: {
      description: "",
      projectName: this.props.projects[0].value,
      assigneeId:"0",
      priorityId:1,
      typeId:1,
      statusId:1      
    },
    errors: {},
    taskStatuses: [{ value: 1, label: "New" }]
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .label("Title"),
    description: Joi.string()
      .required()
      .label("Description")
      .max(100),
      projectName: Joi.string()
      .required()
      .label("Project Name")
      .max(100),
      priorityId: Joi.number()
      .required()
      .label("Priority"),
      typeId: Joi.number()
      .required()
      .label("Incident Type"),
     statusId: Joi.number()
      .required()
      .label("Status"),
     assigneeId: Joi.string()
      .label("Assignee")
  };

  populateTicket=async()=>{  
    try {
      const _id = this.props.match.params.id;
      if (_id === "new")
       return ;        
      if(this.props.ticket)
      {
        const data =this.mapToViewModel(this.props.ticket.data) ;
        this.setState({ data});
       const availableStatus= this.props.userRole=='Administrator'?
           this.props.statuses.filter(x=>x.value!==1 && x.value!=3 ):
           this.props.statuses.filter(x=>x.value!==1)
        this.setState({taskStatuses:availableStatus})
      }   
    } catch (ex) {
     if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
     await  this.props.fetchUsers();    
    if(this.props.match.params.id!=="new")
       await this.props.fetchTicket(this.props.match.params.id);
    await this.populateTicket();
  }

  mapToViewModel=(ticket)=> {
    return {
        _id: ticket._id,
        title: ticket.title,
        description:ticket.description,
        assigneeId:ticket.assigneeId,
        projectName:ticket.projectName,
        priorityId:ticket.priorityId,
        typeId:ticket.typeId,
        statusId: ticket.statusId
      };
  }

  doSubmit = async () => {
    if(this.props.match.params.id==="new")
    await this.props.addTicket(this.state.data);
    else
    await this.props.updateTicket(this.props.match.params.id,this.state.data);   
    this.props.history.push("/tickets");
  };

  render() {      
   const isNew = this.props.match.params.id==="new";
   const{data:ticket}=this.state;
    return (  
       <Container fluid="md" style={{paddingBottom:"25px"}}>      
      <Row>
          <Col >
            <h1 style={{textAlign:"center"}}> Ticket </h1>
              <Badge pill variant="primary"  >
              {ticket.title!=undefined? <h2 style={{color:"blue"}}>
                 {(!isNew && !!ticket)?`${ticket.title}`:""}
               </h2>:''}
            </Badge>
         </Col>
       </Row>
      <div className="form-body"> 
        <form  onSubmit={this.handleSubmit} >   
        <Row>
          <Col>
          <div>
             {this.renderInput("mulitine","description", "Issue Description",
                    (!isNew && !!ticket)?ticket.description:"")}
           </div>
          </Col>
        </Row>
        <Row>
          <Col>
          {this.renderSelect("projectName", "ProjectName", this.props.projects, 
                  (!isNew && !!ticket)?ticket.projectName:"")}  
          </Col>
          <Col>
          {this.renderSelect("typeId", "TicketType",
                 this.props.ticketTypes,(!isNew && !!ticket)?ticket.typeId:1)}
          </Col>
          <Col>
          {this.renderSelect("priorityId", "Priority", 
                   this.props.priorities,(!isNew && !!ticket)?ticket.priorityId:1)}
          </Col>
        </Row> 
        <Row>
          <Col md={{ span: 3  }}>
          {this.renderSelect("assigneeId", "Assignee", 
                this.props.users,(!isNew && !! ticket)?ticket.assigneeId:"")} 
          </Col>
          <Col md={{ span: 3 }}>
          {this.renderSelect("statusId", "Status", 
                this.state.taskStatuses,(!isNew && !!ticket)?ticket.statusId:1)}
          </Col>
        </Row> 
       <br/> 
       {(isNew && !!ticket)?  this.renderButton("Create"):
                           this.renderButton("Save")}  
      
        </form>
      </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {   
    users: state.users.users,
    ticketTypes:state.tickets.types,
    priorities:state.tickets.priorities ,
    ticket:state.tickets.ticket ,
    statuses:state.tickets.statuses,
    projects:state.tickets.projects
  };
};


export default connect(mapStateToProps, {
   addTicket,
   updateTicket,
   fetchTicket,
   fetchUsers
  })(TicketForm);

