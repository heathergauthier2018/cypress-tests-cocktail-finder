const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://heathergauthier2018.github.io/cocktail-finder2.0/',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});

