// Favorites user journey
// Covers: search -> save -> verify in favorites -> remove -> verify removed

describe('Favorites flow', () => {
  beforeEach(() => {
    // Custom command defined in support/commands.js
    cy.visitHome();
  });

  it('adds and removes a favorite cocktail', () => {
    // 1. Search for a known cocktail
    cy.searchFor('margarita');

    // 2. Grab the first search result card (ONLY from the search results grid)
    cy.get('#results [data-testid="cocktail-card"]').first().as('firstCard');

    // 3. Save its name for later comparison
    cy.get('@firstCard')
      .find('[data-testid="cocktail-name"]')
      .invoke('text')
      .then((text) => text.trim())
      .as('cocktailName');

    // 4. Click the favorite button on that card
    cy.get('@firstCard')
      .find('[data-testid="favorite-button"]')
      .click();

    // 5. Navigate to Favorites section (custom command)
    cy.goToFavorites();

    // 6. Verify that the saved cocktail appears in the favorites list
    cy.get('@cocktailName').then((name) => {
      cy.get('[data-testid="favorites-list"]')
        .contains('[data-testid="cocktail-name"]', name);
    });

    // 7. Remove that same cocktail from favorites
    cy.get('@cocktailName').then((name) => {
      cy.get('[data-testid="favorites-list"] [data-testid="cocktail-card"]')
        .contains('[data-testid="cocktail-name"]', name)
        .closest('[data-testid="cocktail-card"]')
        .within(() => {
          cy.get('[data-testid="favorite-button"]')
            .scrollIntoView()
            .click({ force: true }); // force click in case Cypress thinks it's partially hidden
        });

      // 8. Assert it is no longer in the favorites list
      cy.get('[data-testid="favorites-list"]')
        .should('not.contain', name);
    });
  });
});
