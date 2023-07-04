describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://typo3.traefik.me', {failOnStatusCode: false});
    cy.screenshot('first-page');
  })
})