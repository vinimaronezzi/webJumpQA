import { fakerPT_BR as faker } from '@faker-js/faker';

class CheckOutPage {
    constructor() {
        this.name = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.street = faker.location.streetAddress();
        this.state = faker.location.state();
        this.city = faker.location.city();
        this.zipCode = faker.location.zipCode();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.pswd = faker.internet.password();
    }
    
    fillShippingFields() {
        const costumerInfoInputFields = [
            this.email,
            this.name,
            this.lastName,
            this.street,
            this.city,
            this.zipCode,
            this.phoneNumber,
        ];

        const inputFields = [
        'input[name="username"]',
        'input[name="firstname"]',
        'input[name="lastname"]',
        'input[name="street[0]"]',
        'input[name="city"]',
        'input[name="postcode"]',
        'input[name="telephone"]'
        ];

        cy.intercept('GET', '/static/version1616152004/frontend/Magento/luma/en_GB/Magento_Tax/template/checkout/shipping_method/price.html').as('loadShippingHtml');
        cy.wait('@loadShippingHtml', {timeout: 10000}).then((req) => {
            expect(req.response.statusCode).to.eq(200);

            cy.get('select[name="country_id"]', {timeout: 6000}).select('Brazil');
            cy.get('select[name="region_id"]', {timeout: 6000}).select('Paraná');
    
            let index = 0
            inputFields.forEach(elem => {
                cy.get('#checkout-step-shipping', {timeout: 6000})
                .find(elem).type(costumerInfoInputFields[index]);
                index = index + 1;
            });
            cy.get('button[type=submit]').contains('Next').click();
        })
    }

    placeOrder() {

        const shippingDetails = [
            this.name,
            this.lastName,
            this.street,
            this.city,
            'Paraná',
            this.zipCode,
            'Brazil',
            this.phoneNumber
        ];

        cy.intercept('GET', '/static/version1616152004/frontend/Magento/luma/en_GB/Magento_Checkout/template/billing-address/actions.html').as('loadPricingHtml');
        cy.wait('@loadPricingHtml', {timeout: 10000}).then((req) => {
            expect(req.response.statusCode).to.eq(200);
            
            shippingDetails.forEach(elem => {
                cy.get('div.checkout-billing-address').should('contain', elem);
            });
            cy.get('button[type=submit] > span').contains('Place Order').click();
        });
    }

    assertPurchase() {
        cy.intercept('GET', '/static/version1616152004/frontend/Magento/luma/en_GB/Magento_Ui/templates/collection.html').as('loadPurchaseHtml');
        cy.wait('@loadPurchaseHtml', {timeout: 10000}).then((req) => {
            expect(req.response.statusCode).to.eq(200);
            cy.get('h1.page-title > span').should('have.text', 'Thank you for your purchase!');
            cy.get('div > p > span[data-bind*="getEmailAddress"]').should('have.text', this.email);
        });
    }
}

export default new CheckOutPage();