/// <reference types="cypress" />

describe('Login com usuário conhecido', () => {
   it('Deve fazer o login com sucesso', () => {
      cy.fixture('baseUser').then((user) => {
         cy.visit('/minha-conta')

         cy.get('input[id="username"]').type(user.email)
         cy.get('input[id="password"]').type(user.password)
         cy.get('input[name="login"]').click()

         cy.contains(`Olá, ${user.email.split('@')[0]}`).should('be.visible')
      })
   })
})