describe ('createNewTicket', () => {
    beforeEach(()=>{
      cy.intercept('DELETE', 'http://localhost:8082/Tickets/*',
      "Ticket deleted."
    )
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
    })

    // delete Ticket
    it('Check Deete Ticket Request',()=>{ 
      cy.visit('/')
      .get('#SignInAdmin',{ timeout: 10000 })
      .click()
      .get('a:first')
      .click()   
      cy.get('#dTable tr:last td:last')
      .click()
      cy.get('#dTable tr').should('not.exist')
    })
    
})