class MenPage {
    addProducToCart() {
        cy.get('ol[class="product-items widget-product-grid"]').then(($list) => {
            const items = $list.find('li[class="product-item"]');
            
            for (let i = 0; i < items.length; i++) {
                const $item = Cypress.$(items[i]);
                
                cy.wrap($item).then(() => {
                    cy.get( 'ol[class="product-items widget-product-grid"]')
                    .get('li[class="product-item"]').eq(i)
                    .find('div[class="swatch-option text"][index="0"]').click()
                    .parents('li[class="product-item"]')
                    .find('div[class="swatch-option color"][index="0"]').click()
                    .parents('li[class="product-item"]').find('button[title="Add to Cart"]').click({force:true})
                    .get('span[class="counter qty"] > span.counter-number', {timeout: 6000}).should('contain', `${i + 1}`);
                });
            }
        });
    }
}

export default new MenPage();