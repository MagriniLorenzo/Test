describe('Test di accesso a Cosmogas SSO', () => {
  it('Compila il campo email e clicca su Avanti', () => {

    cy.viewport(1920, 1080);

    cy.visit('https://sso.cosmogas.com');

    // Chiudo il banner
    cy.get('button.iubenda-cs-close-btn').click();

    // Scrivo la mail
    cy.get('#username').type('manuel.baldoni@dma.it');

    // Clicco "Avanti"
    cy.get('button.amplify-button--primary').click();

    // Scrivo la password
    cy.get('#password').type('Ciao1234!');

    // Clicco "Accedi"
    cy.get('button.amplify-button--primary').click();

    // Clicco "Portale My Cosmogas"
    cy.contains('a', 'Portale My Cosmogas').click();

    cy.origin('https://my.cosmogas.com/it-IT', () => {

      // Verifico l'url di arrivo
      cy.url().should('eq', 'https://my.cosmogas.com/it-IT');

      // Verifico che il link "Documentale" sia presente
      cy.contains('a', 'Documentale').should('be.visible');
    });
  });
});