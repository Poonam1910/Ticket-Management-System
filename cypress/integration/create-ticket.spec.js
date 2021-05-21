import React from "React"
describe ('createNewTicket', () => {
    beforeEach(()=>{
      cy.visit('/tickets/new')
    })

    it.only('focuses input on description', () => {
        cy.focused()
          .should('have.class', 'text')
      })

})