describe('Favorites Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://jobicy.com/api/v2/remote-jobs', {
      statusCode: 200,
      fixture: 'mock-faves.json'
    }).as('fetchAPI');
    cy.visit('http://localhost:3000/favorites');
    cy.wait('@fetchAPI');
  });

  it('should have the correct URL for the Favorites page', () => {
    cy.url().should('eq', 'http://localhost:3000/favorites');
  });

  it('should display a header with the title on the Favorites page', () => {
    cy.get("h1").contains("WFHunter").should("be.visible");
  });

  it('should click the Home link', () => {
    cy.get("a.header-button").contains("Home").click();
    cy.location('pathname').should('eq', '/')
    cy.go('back')
  });

  it('should display a main title', () => {
    cy.get('.fave-title').should('be.visible').and('contain', 'Your favorite job postings:');
  });

  it('displays current favorites', () => {
    cy.get('.faves-section').should('be.visible')
    cy.get('.faves-section').should('have.length', 1)
    cy.get('.faves-section')
    .within(() => {
      // had issues with the mock data not rendering and the GUI instead rendering the home page here. tried testing the children, first and last, settled on within, cypress instead tried to run the homepage url //
      cy.get('h2').contains('Technical Support Engineer (South Asia)')
      cy.get('h3').contains('January 14th, 2024')
      cy.get('h3.company-name').contains('CertiK')
    })
    cy.get('.faves-section')
    .within(() => {
      cy.get('h2').contains('Specialist - Analytics and Data Science')
      cy.get('h3').contains('January 14th, 2024')
      cy.get('h3.company-name').contains('Athena')
    })
  });
});