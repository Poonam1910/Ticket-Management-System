import React from "React"

describe ('updateTicket', () => {
    beforeEach(()=>{
      cy.intercept('GET', 'http://localhost:8082/Tickets/*', //fake ticketId
      {
        "_id":'60a5633d5ff4727d04029b69',
        "title":"INC1",
        "description":"test system"  ,
        "projectName":'test'        
      }
    ) 
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
      .get('#dTable tr:last td:first',{ timeout: 10000 })   
      .click()
    })

 //auto focus  description
    it('focuses input on description', () => {
      cy.focused()
      .should('have.attr','type', 'text')
    })

//Check Default value in Update Ticket Form based on FormId
  it('Check Default value in Update Ticket Form',()=>{     
    cy.visit('/')
    .get('#SignInAdmin',{ timeout: 10000 })
    .click()
    .get('a:first')
    .click()
    .get('#dTable tr:last td:first',{ timeout: 10000 })   
    .click() 
    .get('input[name=description]',{ timeout: 10000 })
    .should('have.attr','value','test system') 
    .get('.btn').and('contain','Save')
    .should('be.visible')    
  })

  //Check Update Ticket POST Request
 it('Check Update Ticket POST Request',()=>{ 
    cy.intercept('POST', 'http://localhost:8082/Ticket/60a5633d5ff4727d04029b69',
      [
    {
      "_id":1,       
      "description":"test cypress"        
    }
    ]).as('updateTicket')
    cy.get("form")
    .get('#description').type('test cypress')
    .get('select[id=projectName]').select('Project-test') 
    .get('select[id=typeId]').select('Type 2')
    .get('select[id=priorityId]').select('P2')
    .get('select[id=assigneeId]').each(($el,index) => {
      if(index==1){
        $el.click();  
      }                     
      })
    .get('select[id=statusId]').select('Assigned')
    cy.get("form").submit()
    cy.url().should('include', '/tickets')      
    })
    
})