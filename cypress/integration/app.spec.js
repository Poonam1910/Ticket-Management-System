import React from "React"

describe ('App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })

    // Contains Image with text Spares CNX
    it('Company Image available', () => {
        cy.get('h1', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'SPARES CNX')
    })

})
