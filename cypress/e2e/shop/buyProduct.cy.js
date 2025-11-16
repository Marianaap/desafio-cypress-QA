/// <reference types="cypress" />

describe('Comprar produto', () => {
   beforeEach(() => {
      cy.fixture('baseUser').then((user) => {
         cy.loginSession(user.email, user.password)
      })
   })

   it('Deve adicionar um produto ao carrinho', () => {
      cy.visit('/produtos')
   })
})