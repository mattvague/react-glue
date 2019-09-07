describe('Basics', () => {
  it('does not do much!', () => {
    cy.visit('/')
    cy.contains('Edit src/App.tsx and save to reload.')
  })
})
