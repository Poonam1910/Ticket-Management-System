import React from "React"

describe ('Home Page', () => {

    beforeEach(() => {
        cy.visit('/')
      })
    
      //Load Home
    it('Navigation Menu- Home', () => {
        cy.get('h3', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Home')
    })

    //Load via SignIn Admin
    it('Navigation Menu- SignInAdmin', () => {
        cy.get('#SimAuthBar', { timeout: 10000 })
        cy.get('#SignInAdmin',{ timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Sign in (Admin)')
            .click().end().should('be.null')
            .get('a', { timeout: 10000 })
            .should('be.visible')
            .should('have.attr', 'href', '/tickets')
            .and('contain', 'Tickets')            
            .get('a', { timeout: 10000 })                     
            .and('contain', 'Users')
            .should('be.visible')                 
            .get('label',{ timeout: 10000 })
            .should('be.visible')      
            .and('contain', 'Administrator')  
            .get('button', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Sign Out')                           
        cy.get('.pusher',{ timeout: 10000 })
            .should('be.visible')
    })
    

     

    //Load via SignIn user
    it('Navigation Menu- SignInuser', () => {
        cy.get('#SimAuthBar', { timeout: 10000 })      
        cy.get('#SignInUser',{ timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Sign in (User)')
            .click().end().should('be.null')
            .get('a', { timeout: 10000 })
            .should('be.visible')
            .should('have.attr', 'href', '/tickets')
            .and('contain', 'Tickets')
            .get('a', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Users')
            .get('label',{ timeout: 10000 })
            .should('be.visible')
            .and('contain', 'user')  
            .get('button', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Sign Out')   
        cy.get('.pusher',{ timeout: 10000 })
            .should('be.visible')            
    })
  
})
