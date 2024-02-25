/// <reference types="Cypress" />

import costumerPage from '../pages/costumer'

describe('Create new account before logs in', () => {
    beforeEach(() => {
    // creating new account through UI since we don't have API documentation
    cy.visit('/customer/account/create/')
    costumerPage.createNewAccount();
    costumerPage.assertAccountCreation();
    costumerPage.userlogsOut();
    });

    it('Should login', () => {
        cy.visit('/customer/account/login/');
        costumerPage.userLogin();
        costumerPage.assertUserLogin();
    })
});

