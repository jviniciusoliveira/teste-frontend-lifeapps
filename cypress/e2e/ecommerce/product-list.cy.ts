/// <reference types="cypress" />

context('Home - Lista de produtos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve exibir 10 cards de produto ao carregar a página', () => {
    cy.intercept('/products/?_page=1&_per_page=10').as('getProducts')
    cy.wait('@getProducts')
    cy.get('[data-testid="card-product"]').should('have.length', 10)
  })

  it('Deve filtrar os produtos da categoria "Tênis"', () => {
    cy.intercept('/products/**').as('getProductsByCategory')
    cy.get('[data-testid="categories"]').contains('Tênis').click()
    cy.get('[data-testid="categories"]')
      .contains('Tênis')
      .should('have.attr', 'data-active', 'true')
    cy.wait('@getProductsByCategory')
    cy.get('[data-testid="card-product"]').should('have.length', 5)
  })

  it('Badge da sacola deve estar com valor "0"', () => {
    cy.get('a[title="Sacola de compras"]').find('span').contains('0')
  })
})
