describe('main page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://api.giphy.com/v1/gifs/search?q=Agatha%20Harkness&limit=20&api_key=QQRengN3S8waij1rwiejGypXXSF6lqN4', {fixture: 'characterGifs'})
    cy.visit('http://localhost:3000/character/Agatha%20Harkness')
  })

  it('should display a logo', () => {
    cy.get('.logo').should('be.visible')
  })

  it('should contain the characters name',() => {
    cy.get('.text-container > h1')
    .contains('Agatha Harkness')
  })
  
  it('should have a series of gifs',() => {
    cy.get('.slide').should('be.visible')
    cy.get('.slide').should('have.length', 4)
  })

  it('should be able to get back home by clicking the logo',() => {
    cy.get('.logo')
    .click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})