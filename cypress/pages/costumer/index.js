import { fakerPT_BR as faker } from '@faker-js/faker';

class CostumerPage {
    constructor() {
        this.name = faker.person.firstName(),
        this.lastName = faker.person.lastName(),
        this.email = faker.internet.email(),
        this.pswd = faker.internet.password()
    }
    createNewAccount() {
        const costumerInfo = [
            this.name, 
            this.lastName,
            this.email,
            this.pswd,
            this.pswd
        ];
        const idInputFields = [
            '#firstname', 
            '#lastname', 
            '#email_address', 
            '#password', 
            '#password-confirmation'
        ];

        let index = 0;
        idInputFields.forEach(elem => {
                cy.get(elem).type(costumerInfo[index]);
                index = index + 1;
        });

        cy.get('#is_subscribed').check();
        cy.get('#assistance_allowed_checkbox').check();
        cy.get('button[type="submit"]').contains('Create an Account').click();
    }

    assertAccountCreation() {
        cy.get('div[data-ui-id="message-success"]').should('exist');
    }

    userlogsOut() {
        cy.get('button[class="action switch"]').eq(1).click({force: true})
        .get('li[class="link authorization-link"] > a').contains('Sign Out').click({force: true});
    }

    userLogin() {
        cy.get('#email').type(this.email);
        cy.get('#pass').type(this.pswd);
        cy.get('button[type="submit"]').contains('Sign In').click();
    }

    assertUserLogin() {
        cy.get('div[class="box box-information"] > [class="box-content"] > p')
        .should('contain', `${this.name + ' ' + this.lastName}`);
    }
}

export default new CostumerPage();