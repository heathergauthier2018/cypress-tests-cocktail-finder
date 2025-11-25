// Visit the Cocktail Finder home page (uses baseUrl from cypress.config.js)
Cypress.Commands.add('visitHome', () => {
  cy.visit('/');
});

// Switch to the Search tab and perform a search
Cypress.Commands.add('searchFor', (name) => {
  // Make sure we're on the Search tab
  cy.contains('button', /search/i).click();

  // Now the search pane is visible, so we can safely type
  cy.get('#searchInput')
    .should('be.visible')
    .clear()
    .type(name);

  // Click the Search button in the form
  cy.contains('form#searchForm button', /search/i).click();
});

// Open the Favorites section
Cypress.Commands.add('goToFavorites', () => {
  // Click the "Favorites" summary to ensure the list is visible
  cy.contains('summary', /favorites/i).click();
});
