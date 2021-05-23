import React from "React"
const tokenKey = "token";

describe ('Home Page', () => {

    beforeEach(() => {
        cy.visit('/')
      })
    
      //Load Home
    it('Navigation Menu- Home', () => {
        cy.get('h5', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Home')
    })

    //Load via SignIn Admin
    it('Navigation Menu- LogIn As Admin', () => {
        cy.get('#SimAuthBar', { timeout: 10000 })
        cy.get('#login',{ timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Log In').click()
            .get('#userName').type('admin')
            .get('#password').type('admin{enter}')
            .end().should('be.null')
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
            .get('a', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Log Out')                           
        cy.get('.pusher',{ timeout: 10000 })
            .should('be.visible')
    })
    

    //Load via SignIn user
    it('Navigation Menu- Login As user', () => {
        cy.get('#SimAuthBar', { timeout: 10000 })      
        cy.get('#login',{ timeout: 10000 })             
            .should('be.visible')
            .and('contain', 'Log In').click()
            .get('#userName').type('user')
            .get('#password').type('user{enter}')
            .end().should('be.null')
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
            .get('a', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Log Out')   
        cy.get('.pusher',{ timeout: 10000 })
            .should('be.visible')            
    })
  
})
