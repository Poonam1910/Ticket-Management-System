
describe('TicketList', () => {

  beforeEach(() => {
    cy.visit('/')
    .get('#SignInAdmin',{ timeout: 10000 })
    .click()
    .get('a:first')
    .click()  
  })

  //create-ticket  -admin
  it('Create Ticket Access for Admin ', () => {    
    cy.get('.btn-primary',{ timeout: 10000 })   
    .and('contain', 'Create Ticket') 
    .should('be.visible')
  })
 //ticket filter task type option
 it('Ticket Task Type Filter  options ', () => {
  cy.get('#tktFilter',{ timeout: 10000 })
  .get('td:first')
  .and('contain', 'All Types') 
  .should('be.visible')   
})

//ticket filter task priority option
it('Ticket Priority Filter options ', () => {
  cy.get('#tktPriorityFilter',{ timeout: 10000 })   
  .should('contain', 'All Priority') 
  .should('be.visible')        
})

//Check tickets count with  search text which doesn't exist
it('Check tickets count with  search text which doesnot exist ', () => {
  cy.intercept('GET', 'http://localhost:8082/Tickets', [
    {
      "_id":1,
      "title":"INC1",
      "description":"test system"  ,
      "projectName":'test'    
    }
  ])
  cy.visit('/')
  .get('#SignInAdmin',{ timeout: 10000 })
  .click()
  .get('a:first')
  .click()
  cy.get('#searchTxt',{ timeout: 10000 }) 
  .should('have.attr','placeholder','Search Ticket') 
  .type('test system1{enter}') //dummy value
  .get('#dTable tbody tr').should('not.exist')    
})   

//Check tickets count with  search text which exist
it('Check tickets count with  search text which exist ', () => {
  cy.intercept('GET', 'http://localhost:8082/Tickets', [
    {
      "_id":1,
      "title":"INC1",
      "description":"test system"      
    }
  ])
  cy.visit('/')
  .get('#SignInAdmin',{ timeout: 10000 })
  .click()
  .get('a:first')
  .click()
  cy.get('#searchTxt',{ timeout: 10000 }) 
  .should('have.attr','placeholder','Search Ticket') 
  .type('test system{enter}') 
  .get('#dTable tbody tr').should('have.length',1)    
}) 


//check tickets count with empty response 
it('Ticket Table count with Empty response/In case of Error ', () => { 
  cy.visit('/')
  .get('#SignInAdmin',{ timeout: 10000 })
  .click()
  .get('a:first')
  .click()  
  cy.intercept('GET', 'http://localhost:8082/Tickets', [])
  cy.get('#dTable tr').should('not.exist');  
})

//check tickets count with response 
it('Ticket Table count equal to list ', () => { 
  cy.intercept('GET', 'http://localhost:8082/Tickets', [
    {
      "_id":1,
      "title":"INC1",
      "description":"test system",
      "assignedId":"",
      "typeId":1,
      "statusId":1,
      "priorityId":1  
    }
  ])
  cy.visit('/')
  .get('#SignInAdmin',{ timeout: 10000 })
  .click()
  .get('a:first')
  .click()   
  cy.get('#dTable tr').should('have.length',2);  
  })

//check tickets with View Ticket Link Enabled
it('check tickets count with View Ticket Enable for Admin ', () => { 
    cy.intercept('GET', 'http://localhost:8082/Tickets', [
      {
        "_id":1,
        "title":"INC1",
        "description":"test system",
        "assignedId":"",
        "typeId":1,
        "statusId":1,
        "priorityId":1  
      }
    ])
    cy.visit('/')
    .get('#SignInAdmin',{ timeout: 10000 })
    .click()
    .get('a:first')
    .click()   
    cy.get('#dTable tr:last td:first').should('not.be.disabled')
    })
  })
  
//check ticket with Delete Ticket Enable for Admin 
it('check tickets count with Delete Ticket Enable for Admin ', () => { 
  cy.intercept('GET', 'http://localhost:8082/Tickets', [
    {
      "_id":1,
      "title":"INC1",
      "description":"test system",
      "assignedId":"",
      "typeId":1,
      "statusId":1,
      "priorityId":1  
    }
  ])
  cy.visit('/')
  .get('#SignInAdmin',{ timeout: 10000 })
  .click()
  .get('a:first')
  .click()   
  cy.get('#dTable tr:last td:last').should('not.be.disabled');  
  })

