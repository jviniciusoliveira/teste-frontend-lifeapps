/// <reference types="cypress" />

context('Cart - Carrinho de produtos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Deve exibir 1 produto no carrinho', () => {
    cy.addProductToCart()
    cy.get('[data-testid="cart-product-list"]').should('have.length', 1)
  })

  it('Deve ajustar o valor total quando altera a quantidade do produto', () => {
    cy.addProductToCart()
    cy.get('[data-testid="cart-product-list"]')
      .first()
      .find('*[class^="cartItemPrice"]')
      .then((element) => {
        let price = Number(element.text().replace(/[^0-9.-]+/g, ''))
        cy.wrap(price).as('price')
      })
    cy.get('[name="productQuantity"]').select(2).invoke('val').should('eq', '3')
    cy.get('[data-testid="total-price"]').then((element) => {
      let totalPrice = Number(element.text().replace(/[^0-9.-]+/g, ''))
      cy.get('@price').should('eq', totalPrice / 3)
    })
  })
})
