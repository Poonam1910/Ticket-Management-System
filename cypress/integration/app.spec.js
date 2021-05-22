describe ('App', () => {
    beforeEach(() => {
        cy.visit('/')
      })
    
    it('Company Logo or Image available', () => {
        cy.get('#homeImage', { timeout: 10000 })
            .should('be.visible')
        })

    it('Company Title', () => {
        cy.get('h1', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'SPARES CNX')
    })
    it('Company SubTitle', () => {
        cy.get('h2', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Simple Ticketing System')
    })

})
