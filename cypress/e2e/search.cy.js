// Search user journey
// Assumes:
// - cy.searchFor(name) types into the search input and clicks the search button
// - Search results are rendered as cards with data-testid="cocktail-card"
// - Each card has a data-testid="cocktail-name"

describe('Search flow', () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it('searches for "margarita" and shows results', () => {
    cy.searchFor('margarita');

    // Assert at least one result card appears
    cy.get('[data-testid="cocktail-card"]')
      .its('length')
      .should('be.gt', 0);

    // And at least one card mentions Margarita in its name
    cy.get('[data-testid="cocktail-name"]')
      .contains(/margarita/i);
  });
});
