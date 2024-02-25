/// <reference types="Cypress" />

import menPage from '../pages/men'

it('Should add new men products to cart', () => {
    cy.visit('/men.html')
    menPage.addProducToCart();
})