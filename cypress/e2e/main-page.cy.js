describe('main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display a logo', () => {
    cy.get('.logo').should('be.visible')
  })

  it('shoud contain a note about discover new gifs to the user', () => {
    cy.get('.text-container > h1')
    .contains('DISCOVER GIFS OF YOUR FAVORITE CHARACTERS')
  })

  it('should display a search input for the user', () => {
    cy.get('.text-container > form')
      .should('be.visible')
  })

  it('should be able to type in the search input', () => {
    cy.get('.text-container > form > input')
      .type('Agatha Harkness')
      .should('have.value', 'Agatha Harkness')
  })

  it('should be able to submit the form and be taken to a new page', () => {
    cy.get('.text-container > form > input')
    cy.get('.form').within(() => {
      cy.get('.search-field').type('Agatha Harkness').should('have.value', 'Agatha Harkness')
      cy.get('.search-btn').click()
    })
    cy.intercept('GET', 'https://api.giphy.com/v1/gifs/search?q=Agatha%20Harkness&limit=20&api_key=QQRengN3S8waij1rwiejGypXXSF6lqN4', {fixture: 'characterGifs'})
    cy.url().should('eq', 'http://localhost:3000/Agatha%20Harkness')
  })

  it('should be able to navigate back home by clicking the logo', () => {
    cy.get('.text-container > form > input')
    .type('Agatha Harkness')
    cy.get('.search-btn')
    .click()
    cy.intercept('GET', 'https://api.giphy.com/v1/gifs/search?q=Agatha%20Harkness&limit=20&api_key=QQRengN3S8waij1rwiejGypXXSF6lqN4', {fixture: 'characterGifs'})
    cy.url().should('eq', 'http://localhost:3000/Agatha%20Harkness')
    cy.get('.logo')
    .click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should display a list of character names below the form', () => {
    cy.get('.character-list')
    .should('be.visible')
    .should('contain', 'Abomination')
    .should('contain', 'Absorbing Man')
    .should('contain', 'Adam Warlock')
    .should('contain', 'Agatha Harkness')
  })

  it('should be able to click on a name and be directed to their page', () => {
    cy.get('.text-container > form > input')
    .type('Agatha Harkness')
    cy.get('.search-btn')
    .click()
    cy.intercept('GET', 'https://api.giphy.com/v1/gifs/search?q=Agatha%20Harkness&limit=20&api_key=QQRengN3S8waij1rwiejGypXXSF6lqN4', {fixture: 'characterGifs'})
    cy.url().should('eq', 'http://localhost:3000/Agatha%20Harkness')
  })

  it('should display an error if user enters incorrect input', () => {
    cy.get('.text-container > form > input')
      .type('Agatha Harkne')
    cy.get('.search-btn')
      .click()
    cy.get('.swal-modal')
      .should('be.visible')
  })

  it('should notify and then redirect a user with a bad url', () => {
    cy.visit('http://localhost:3000/A')
    cy.get('.swal-modal')
      .should('be.visible')
    cy.get('.swal-footer > div > button')
      .click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})