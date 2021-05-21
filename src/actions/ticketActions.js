
import { FETCH_TICKETS, ADD_TICKET, UPDATE_TICKET,
      DELETE_TICKET,FETCH_TICKET } from './types';
import axios from 'axios';
import config from "../config.json";
import { toast } from "react-toastify";

// CREATE TICKET
export const addTicket = (data) => async (dispatch) => {  
  try {
  await  axios.post(`${config.BaseApiUri}/Tickets/create`,data)
    .then(({ data }) => {
      dispatch({
        type: ADD_TICKET,
        data
      });
    });
  } catch (err) {
    console.error(err);
  }
};


// GET TICKETS
export const fetchTickets = () => async (dispatch) => {
  try {
    await  axios.get(`${config.BaseApiUri}/Tickets`)
     .then(({ data }) => {
      dispatch({
        type: FETCH_TICKETS,
        data
      });
    });
  } catch (err) {
    console.error(err);
  }
};

// UPDATE TICKET
export const updateTicket = (_id,data) => async (dispatch) => {
 try {
    await  axios.post(`${config.BaseApiUri}/Tickets/update/${_id}`,data)
    .then(({ data }) => {
        dispatch({
          type: UPDATE_TICKET,
          data
        });
  });
  } catch (err) {
    console.error(err);
  }
};

//DELETE TICKET 

export const deleteTicket= (_id) => async (dispatch) => { 
  try {    
     await  axios.delete(`${config.BaseApiUri}/Tickets/${_id}`)
     .then(() => {
      dispatch({
        type: DELETE_TICKET,
        _id
      });
    });   
  } catch (err) {
   toast.error("This ticket has already been deleted.");
  }
};

// FETCH TICKET
export const fetchTicket=(_id)=>async(dispatch)=>{
  try{ 
    await  axios.get(`${config.BaseApiUri}/Tickets/${_id}`)
  .then((data) => {
  dispatch({
     type: FETCH_TICKET,
     data
   });
 });  
  }catch(err){
    toast.error("Failed to load the ticket");
  }
}