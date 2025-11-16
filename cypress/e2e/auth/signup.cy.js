/// <reference types="cypress" />

const { faker } = require("@faker-js/faker")

describe('Criação de conta', () => {
   it('Deve criar uma conta e fazer login', () => {
      const signupData = {
         email: faker.internet.email().toLowerCase(),
         password: faker.internet.password()
      }

      cy.visit('/minha-conta')
      
      cy.get('input[id="reg_email"]').type(signupData.email)
      cy.get('input[id="reg_password"]').type(signupData.password)
      cy.get('input[name="register"]').click()

      cy.contains(`Olá, ${signupData.email.split('@')[0]}`).should('be.visible')
   })
})