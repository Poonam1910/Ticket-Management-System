import React from "React"

describe ('createNewTicket', () => {
    beforeEach(()=>{
      cy.exec("npm run db:reset && npm run db:seed",
         {env: {PATH: "/usr/local/bin"},
      failOnNonZeroExit: false})
        .then((r) => {
        console.log("success", r);
        });
      
       cy.visit('/')
      .get('#SignInAdmin',{ timeout: 10000 })
      .click()
      .get('a:first')
      .click()
      .get('.btn-primary',{ timeout: 10000 })   
      .and('contain', 'Create Ticket')
      .click()
    })

    //auto focus  description Create Ticket
    it('auto focus input on description', () => {
        cy.focused()
        .should('have.attr','type', 'text')
    })

  //default value set in Create Ticket
    it('Check Default value in Create Ticket Form',()=>{   
        cy.get("form")   
        .get('input[name=description]').should('contain','')
        .get('select[id=projectName]').should('contain','Project-test')
        .get('select[id=typeId]').should('contain','Type 1')
        .get('select[id=priorityId]').should('contain','P1')
        .get('select[id=assigneeId]').should('have.value', '--Select--')
        .get('select[id=statusId').should('contain','New')
        .get('.btn').and('contain','Create')
        .and('have.disabled')
        .should('be.visible')
      })

    //Check Create Ticket disabled without mandatory fields
    it('Check Create Ticket disabled without mandatory fields',()=>{   
      cy.get("form")   
      .get('select[id=projectName]').should('contain','Project-test')
      .get('select[id=typeId]').should('contain','Type 1')
      .get('select[id=priorityId]').should('contain','P1')
      .get('select[id=assigneeId]').should('have.value', '--Select--')
      .get('select[id=statusId').should('contain','New')
      .get('.btn').and('contain','Create')
      .should('have.disabled')
      .should('be.visible')
    })

  //Check all fields can set value in Create Ticket
    it('Check all fields can set value in Create Ticket',()=>{   
      cy.get("form")   
      .get('input[name=description]').type('test description')
      .get('select[id=projectName]').select('Project-test')
      .get('select[id=typeId]').select('Type 2')
      .get('select[id=priorityId]').select('P2')
      .get('select[id=assigneeId]').each(($el,index) => {
        if(index==1){
          $el.click();  
        }                     
       })
      .get('select[id=statusId]').select('New')
      .get('.btn').and('contain','Create')
      .should('be.visible')
      })

  //Check Create Ticket POST Request       
    it('Check Create Ticket POST Request',()=>{ 
      cy.intercept('POST', 'http://localhost:8082/Tickets/create', [
      {
        "_id":1,
        "title":"INC1",
        "description":"test cypress",
        "assignedId":"",
        "typeId":1,
        "statusId":1,
        "priorityId":1  
      }
      ]).as('newTicket')

      cy.get("form")   
      .get('input[name=description]').type('test description').should('contain','')
      .get('select[id=projectName]').select('Project-test')
      .get('select[id=typeId]').select('Type 2')
      .get('select[id=priorityId]').select('P2')
      .get('select[id=assigneeId]').each(($el,index) => {
        if(index==1){
          $el.click();  
        }                     
       })
      .get('select[id=statusId').should('contain','New')
      .get('.btn').and('contain','Create')
      .should('be.visible').end()
      cy.get("form").submit()
      cy.url().should('include', '/tickets')      
      })

})