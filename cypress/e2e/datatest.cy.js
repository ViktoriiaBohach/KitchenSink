describe('data-test best practices', () => {
  it.only('passes', () => {
    cy.visit('https://example.cypress.io')

    cy.get('a.dropdown-toggle').click();
    cy.get('a[data-test="Querying"]').click();
  })
})