/// <reference types="Cypress" />

import costumerPage from '../support/pages/costumer'

it('Should register new user', () => {
    cy.visit('/customer/account/create/')
    costumerPage.createNewAccount();
    costumerPage.assertAccountCreation();
});