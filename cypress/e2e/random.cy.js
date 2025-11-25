// Random cocktail user journey
// Note: these selectors assume your app exposes data-testid attributes
// like cocktail-name, cocktail-image, and cocktail-instructions.
// If you don't have them yet, you can add them in the UI or tweak the selectors here.

describe('Random Cocktail flow', () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it('shows a random cocktail with name, image, and instructions', () => {
    // Click the random cocktail button
    cy.contains('button', /random/i).click();

    // Name should appear and not be empty
    cy.get('[data-testid="cocktail-name"]')
      .should('be.visible')
      .and('not.be.empty');

    // Image should load successfully
    cy.get('[data-testid="cocktail-image"]')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });

    // Instructions should be present
    cy.get('[data-testid="cocktail-instructions"]')
      .should('be.visible')
      .and('not.be.empty');
  });
});
