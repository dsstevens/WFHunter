describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://jobicy.com/api/v2/remote-jobs', {
      statusCode: 200,
      fixture: 'mock-data.json'
    }).as('fetchAPI');
    cy.visit('http://localhost:3000/details/17439');
    cy.wait('@fetchAPI');
  });

  it('should have the correct URL for the job detail page', () => {
    cy.url().should('eq', 'http://localhost:3000/details/17439');
  });

  it('should display a header with the title on the Home page', () => {
    cy.get("h1").contains("WFHunter").should("be.visible");
  });
  
  it('should click the Home link', () => {
    cy.get("a.header-button").contains("Home").click();
    cy.location('pathname').should('eq', '/')
    cy.go('back')
  });

  it('should click the Favorites link', () => {
    cy.get("a.header-button").contains("Favorites").click();
    cy.location('pathname').should('eq', '/favorites')
    cy.get('.faves-section').children().should('have.length', 0)
    cy.go('back')
  });

  it('should display an Add to Favorites button', () => {
    cy.get('button.fave-button').should('be.visible').and('contain', '✨Add to Favorites✨').click()
  });

  it('displays job details from the selected job', () => {
    cy.get('.job-details').should('be.visible')
    cy.get('p').contains('Company: CertiK')
    cy.get('p').contains('Job Title: Technical Support Engineer (South Asia)')
    cy.get('p').contains('Level: Any')
    cy.get('p').contains('Job Type: full-time')
    cy.get('p').contains('Location: APAC')
    cy.get('p').contains('You are fascinated by security and red teaming.')
    cy.get('p').contains('Job posted: January 14th, 2024')
  });
});