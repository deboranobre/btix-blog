describe('Acessa a Home com os possíveis cenários', () => {
  it('O usuário acessa a página', () => {
    cy.visit('/');

    cy.get('#logo').click();
    cy.url().should('include', '/');

    cy.get('#users-link').click();
    cy.url().should('include', '/usuarios');

    cy.get('#logo').click();
    cy.url().should('include', '/');

    cy.get('.comments-link').first().click();
    cy.url().should('include', '/post/');
  });
});
