describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://jobicy.com/api/v2/remote-jobs', {
      statusCode: 200,
      fixture: 'mock-data.json'
    }).as('fetchAPI');
    cy.visit('http://localhost:3000');
    cy.wait('@fetchAPI');
  });

  it('should have the correct URL for the Main page', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should display a header with the title on the Home page', () => {
    cy.get("h1").contains("WFHunter").should("be.visible");
  });

  it('should click the favorite link', () => {
    cy.get("a.header-button").contains("Favorites").click();
    cy.location('pathname').should('eq', '/favorites')
    cy.get('.faves-section').children().should('have.length', 0)
    cy.go('back')
  });

  it('should display a main title', () => {
    cy.get('.home-title').should('be.visible').and('contain', 'Newest remote job postings');
  });

  it('displays newest job postings on page load', () => {
    cy.get('.main-overlay').should('be.visible')
    cy.get('.main-overlay').should('have.length', 1)
    cy.get('.main-overlay').children().first()
    .within(() => {
      cy.get('h2').contains('Technical Support Engineer (South Asia)')
      cy.get('h3').contains('January 14th, 2024')
      cy.get('h3.company-name').contains('CertiK')
    })
    cy.get('.main-overlay').children().last()
    .within(() => {
      cy.get('h2').contains('UI Artist (Strong Middle/Senior)')
      cy.get('h3').contains('January 14th, 2024')
      cy.get('h3.company-name').contains('Gameloft')
    })
  });
});