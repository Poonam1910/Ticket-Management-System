export const ticketsInitialState = {  
  currentTicket: false,
  addTicket: false,
  editTicket: false,
  statuses: ['open', 'on hold', 'closed'],
  priorities: ['high', 'normal', 'low'],
  filterPriority: 'All Priorities',
  filterStatus: 'All Statuses',
  filterAlpha: false,
  filterSearch: false,
};
export const INITIAL_STATE_TICKETS = {
  tickets: []  ,
  ticket:{},
  priorities:
   [
  { value: 3, label: "P3" },
  { value: 2, label: "P2"},
  { value: 1, label: "P1"}],

  statuses:
   [
  { value: 1, label: "New" },
  { value: 2, label: "Assigned"},
  { value: 3, label: "Acknowledged"},
  { value: 4, label: "Resolved"}],

   types:[
  { value: 1, label: "Type 1" },
  { value: 2, label: "Type 2"},
  { value: 3, label: "Type 3"}],
 
  projects:[{ value: "Project-test", label: "Project-test" }],
 
};
