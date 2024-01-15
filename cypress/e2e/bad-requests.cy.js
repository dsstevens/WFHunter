describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://jobicy.com/api/v2/remote-jobs', {
      statusCode: 200,
      fixture: 'mock-data.json'
    }).as('fetchAPI');
    cy.visit('http://localhost:3000');
  });

  it('handles a 400 Bad Request error', () => {
    cy.intercept('GET', 'https://jobicy.com/api/v2/remote-jobs', {
      statusCode: 400,
      body: 'Bad Request'
    }).as('getBadRequest');
    cy.wait('@getBadRequest');
  });

  it('handles a 500 Internal Server error', () => {
    cy.intercept('GET', 'https://jobicy.com/api/v2/remote-jobs', {
      statusCode: 500,
      body: 'Internal Server Error'
    }).as('getServerError');
    cy.wait('@getServerError');
  });
});

describe('Should show an error page', () => {
  it("should show an appropriate error if the page doesn't exist", () => {
    cy.visit("http://localhost:3000/potato");
    cy.get(".error-msg").should(
      "contain",
      "Oops! An error occurred. Please try again :("
    );
  });
})