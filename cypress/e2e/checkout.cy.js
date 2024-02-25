/// <reference types="Cypress" />

import menPage from '../pages/men'
import checkoutPage from '../pages/checkout'

describe('Should add products to cart before checkout', () => {
    beforeEach(() => {
        cy.visit('/men.html');
        menPage.addProducToCart();
    });

    it('Should complete checkout order', () => {
        cy.visit('/checkout/');
        checkoutPage.fillShippingFields();
        checkoutPage.placeOrder();
        checkoutPage.assertPurchase();
    });
});