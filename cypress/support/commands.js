// // ***********************************************
// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************


// Cypress.Commands.add("selectNth", (select, pos) => {
//     cy.get(`${select}`)
//       .eq(pos)
//       .then( e => {
//          cy.get(select)
//            .select(e.val())
//       })
//   })

//   Cypress.Commands.add(
//     'chooseReactSelectOption',
//     (label, text, option, selectDelay = 0) => {
//       cy.contains(label)
//         .parent()
//         .find(`input`)
//         .click({ force: true })
//         .type(text, { force: true });
  
//       cy.wait(selectDelay);
  
//       cy.get(`[class*="-menu"]`)
//         .contains(option)
//         .click();
//     },
//   );

// // -- This is a parent command --
// // Cypress.Commands.add('login', (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
