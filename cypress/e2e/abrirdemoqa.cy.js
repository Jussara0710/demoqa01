describe('Testando elementos na demoqa', () => {
  it('abrir o site', () => {
    cy.visit('https://demoqa.com')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://demoqa.com/elements');
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
    cy.get('#userName').clear('J');
    cy.get('#userName').type('Jussara');
    cy.get('#userEmail-wrapper').click();
    cy.get('#userEmail').clear();
    cy.get('#userEmail').type('teste@teste.com');
    cy.get('#currentAddress').click();
    cy.get('#permanentAddress').click();
    cy.get('#submit').click();
    /* ==== End Cypress Studio ==== */
  })
})