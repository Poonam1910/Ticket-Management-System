
import React from "React"
//import { mount } from '@cypress/react' // or @cypress/vue
//import TicketTable from '../../src/components/ticketTable'

const tickets = [
  {
    "_id":1,
    "title":"INC1",
    "description":"test system",
    "assignedId":"",
    "typeId":1,
    "statusId":1,
    "priorityId":1
  },
]
describe('TicketList', () => {

  beforeEach(() => {
    cy.visit('/')
    .get('#SignInUser',{ timeout: 10000 })
    .click()
    .get('a:first')
    .click()   
  })

 

//create-ticket  -user
  it('No Create Ticket Access for Users ', () => {   
    cy.get('.btn-primary').should('not.exist');
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
    cy.get('#tktFilter',{ timeout: 10000 })
    .get('td:nth-child(2)')
    .and('contain', 'All Priority') 
    .should('be.visible')    
  })

   //ticket search option
  it('Ticket Filter options ', () => {
    cy.get('#SignInUser',{ timeout: 10000 })
    .click()
    .get('a:first')
    .click()
    .get('#searchTxt',{ timeout: 10000 }) 
    .should('have.attr','placeholder','Search Ticket') 
    .type('write tests{enter}') //dummy value
    .get('#dTable').should('have.length', 0)    
  }) 
    
})