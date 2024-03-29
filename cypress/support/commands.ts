/// <reference types="cypress" />

// -- This is a parent command --
Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/');

  cy.get('input[name=q]').type(query).parent('form').submit();
});

declare namespace Cypress {
  interface Chainable {
    searchByQuery(email: string): Chainable<void>
  }
}