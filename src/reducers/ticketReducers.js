
import { FETCH_TICKETS, ADD_TICKET, UPDATE_TICKET
  ,FETCH_TICKET, DELETE_TICKET
} from '../actions/types';

import { INITIAL_STATE_TICKETS } from '../seeders/ticketsInitialState';

const ticketReducers=(state = INITIAL_STATE_TICKETS, action) => {
  switch (action.type) {
    case FETCH_TICKETS:
      return {
        ...state,
        tickets: [ ...action.data],        
      };     
    case ADD_TICKET:
      return {
        ...state,
        tickets: [...state.tickets, action.data],
      };
    case DELETE_TICKET:
      {
       return {
        ...state,
        tickets: state.tickets.filter(x => x._id !== action._id) 
       }
      }
    case UPDATE_TICKET:
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket._id === action.data._id ? action.data : ticket
        ),
      };   
    case FETCH_TICKET:
      return {
        ...state,
        ticket: action.data
      };              
    default:
      return state;
  }
};

export default ticketReducers;