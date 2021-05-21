
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
  })

  //create-ticket  -admin
  it('Create Ticket Access for Admin ', () => {
    cy.get('#SignInAdmin',{ timeout: 10000 })
    .click()
    .get('a:first')
    .click()
    .get('.btn-primary',{ timeout: 10000 })   
    .and('contain', 'Create Ticket') 
    .should('be.visible')
  })

//create-ticket  -user
  it('No Create Ticket Access for Users ', () => {
    cy.get('#SignInUser',{ timeout: 10000 })
    .click()
    .get('a:first')
    .click()
    .get('.btn-primary').should('not.exist');
  })
  
  //ticket filter task type option
  it('Ticket Task Type Filter  options ', () => {
    cy.get('#SignInUser',{ timeout: 10000 })
    .click()
    .get('a:first')
    .click()
    .get('#tktFilter',{ timeout: 10000 })
    .get('td:first')
    .and('contain', 'All Types') 
    .should('be.visible')
  })

  //ticket filter task priority option
  it('Ticket Priority Filter options ', () => {
    cy.get('#SignInUser',{ timeout: 10000 })
    .click()
    .get('a:first')
    .click()
    .get('#tktFilter',{ timeout: 10000 })
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
    .get('#tktFilter',{ timeout: 10000 })
    .get('td:nth-child(3)')
    .and('contain', 'Search Ticket') 
    .should('be.visible')
  }) 
    
  // it.only('Ticket Filter options ', () => {
  //   cy.get('#SignInUser',{ timeout: 10000 })
  //   .click()
  //   .get('a:first')
  //   .click()
  //   .get('#tktFilter',{ timeout: 10000 })
  //   .and('contain', 'Search Ticket')
  //   .type('write tests{enter}')
  //   // cy.get('#dTable').should('have.length', 0)    
  // }) 
    
  // //cy.get('li').filter(':contains("Services")').should('have.length', 2)
  // it.only('contains the correct number of tickets', () => {    
  //   cy.get('#SignInUser',{ timeout: 10000 })
  //   .click()
  //   .get('a:first')
  //   .click()
  //   .get('#dTable').should('have.length', tickets.length)
  // })

  // it.only('Ticket Filter options ', () => {
  //   cy.get('#SignInUser',{ timeout: 10000 })
  //   .click()
  //   .get('a:first')
  //   .click()
  //   .get('#tktFilter',{ timeout: 10000 })
  //   .get('td:nth-child(2)')
    // cy.get($trs).find('td:nth-child(9)').each(($td) => {  
    //   cy.get($td).not(':contains("0")')  // This is the key :)
    //       .first().parent('tr')   
    
//     cy.get('#user-edit a').click()
// cy.url().should('include', '/users/1/edit') // => true
// cy.url().should('eq', 'http://localhost:8000/users/1/edit')
     
})