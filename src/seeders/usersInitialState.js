export const usersInitialState = {  
  addUser: false,
  editUser: false,
  dropdowns: [   
    {
      placeholder: 'department',
      choices: [        
        'TMS',
        'QA',
        'Sales',
      ],
    },
    {
      placeholder: 'role',
      choices: ['User', 'admin'],
    },
  ],
};

export const INITIAL_STATE_USERS = {
  users: [ ],
};


