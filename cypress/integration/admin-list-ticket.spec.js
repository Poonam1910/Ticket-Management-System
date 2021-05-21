
import React from "React"
import { copy } from "../../../server/api/ticket"
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

//create-ticket  -user
  it('No Create Ticket Access for Users ', () => {
    cy.get('.btn-primary').should('not.exist');
  })

  // //ticket filter task priority option
  // it.only('Ticket Priority Filter options ', () => {   
  //   cy.get('#tktFilter',{ timeout: 10000 })
  //   .get('td:nth-child(2)')
  //   .and('contain', 'All Priority') 
  //   .should('be.visible')
  
    // .get('[id^="react-select-"]').contains('P 1')
    // .click() 
    // .get("#dTable td:nth-child(2)").each(($e1, index) => {
    //   const text = $e1.text();
    //   if (text.includes("Google")) {
    //     cy.get("td:nth-child(2)")
    //       .eq(index)
    //       .then(function(Field) {
    //       const Fieldtext = Field.text();
    //       expect(Fieldtext).to.equal("P 1");
    //     })  
    //   }})
    })

   //ticket search option
  it('Ticket Filter options ', () => {   
    cy.get('#searchTxt',{ timeout: 10000 }) 
    .should('have.attr','placeholder','Search Ticket') 
    .type('write tests{enter}') //dummy value
    .get('#dTable').should('have.length', 0)    
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