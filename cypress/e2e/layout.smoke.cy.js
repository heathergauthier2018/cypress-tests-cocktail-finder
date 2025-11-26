// cypress/e2e/layout.smoke.cy.js

// Lightweight layout + navigation smoke test.
// Goal: make sure the main Cocktail Finder UI renders correctly
// on both desktop and mobile viewports.

describe('Layout & Navigation – smoke check', () => {
  const viewports = [
    { label: 'desktop', size: [1280, 720] },
    { label: 'mobile', size: [375, 667] },
  ];

  viewports.forEach(({ label, size }) => {
    it(`renders core layout on ${label}`, () => {
      cy.viewport(size[0], size[1]);
      cy.visit('/'); // baseUrl is set in cypress.config.js

      // Main page shell should load
      // (adjust text here if you ever rename the app heading)
      cy.contains('h1, h2', /cocktail finder/i).should('be.visible');

      // Random/new drink action is present
      cy.contains('button', /random|new drink/i).should('be.visible');

      // Core cocktail card elements
      cy.get('[data-testid="cocktail-name"]').should('be.visible');
      cy.get('[data-testid="cocktail-image"]').should('be.visible');
      cy.get('[data-testid="cocktail-instructions"]').should('be.visible');

      // There should be at least one primary action button in the toolbar
      cy.get('button').its('length').should('be.greaterThan', 0);
    });
  });
});
