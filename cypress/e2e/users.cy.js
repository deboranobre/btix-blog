describe('Acessa a página de usuários', () => {
  it('O usuário acessa a página', () => {
    cy.visit('/usuarios');

    cy.get('.user-link').first().should('be.visible');

    cy.get('.user-link').first().click();
    cy.url().should('include', '/usuario/');
  });
});
