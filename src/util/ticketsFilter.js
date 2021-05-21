export const ticketsCategoriesFilter = (
  ticket,
  department,
  priority,
  status
) => {
  if (
    department !== 'All Departments' &&
    priority === 'All Priorities' &&
    status === 'All Statuses'
  ) {
    if (ticket.department === department) {
      return true;
    }
  } else if (
    department !== 'All Departments' &&
    priority !== 'All Priorities' &&
    status === 'All Statuses'
  ) {
    if (ticket.department === department && ticket.priority === priority) {
      return true;
    }
  } else if (
    department !== 'All Departments' &&
    priority !== 'All Priorities' &&
    status !== 'All Statuses'
  ) {
    if (
      ticket.department === department &&
      ticket.priority === priority &&
      ticket.status === status
    ) {
      return true;
    }
  } else if (
    department !== 'All Departments' &&
    priority === 'All Priorities' &&
    status !== 'All Statuses'
  ) {
    if (ticket.department === department && ticket.status === status) {
      return true;
    }
  } else if (
    department === 'All Departments' &&
    priority !== 'All Priorities' &&
    status === 'All Statuses'
  ) {
    if (ticket.priority === priority) {
      return true;
    }
  } else if (
    department === 'All Departments' &&
    priority === 'All Priorities' &&
    status !== 'All Statuses'
  ) {
    if (ticket.status === status) {
      return true;
    }
  } else if (
    department === 'All Departments' &&
    priority !== 'All Priorities' &&
    status !== 'All Statuses'
  ) {
    if (ticket.priority === priority && ticket.status === status) {
      return true;
    }
  } else if (
    department === 'All Departments' &&
    priority === 'All Priorities' &&
    status === 'All Statuses'
  ) {
    return true;
  } else {
    return false;
  }
};

export const ticketsAlphaFilter = (order, list, key) => {
  if (order === 'up') {
    return list.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  } else if (order === 'down') {
    return list.reverse(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
};

export const ticketsSearchFilter = (list, str) => {
  const searchTerms = str.toLowerCase();
  const filteredTickets = list.map((ticket) => {
    if (
      ticket.subject.toLowerCase().includes(searchTerms) ||
      ticket.description.toLowerCase().includes(searchTerms) ||
      ticket.createdBy.toLowerCase().includes(searchTerms) ||
      ticket.createdOn.toLowerCase().includes(searchTerms) ||
      ticket.department.toLowerCase().includes(searchTerms) ||
      ticket.priority.toLowerCase().includes(searchTerms) ||
      ticket.status.toLowerCase().includes(searchTerms)
    ) {
      return ticket;
    } else {
      return '';
    }
  });
  return filteredTickets.filter((ticket) => ticket);
};
