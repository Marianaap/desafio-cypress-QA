/// <reference types="cypress" />

const PRODUCT_INDEX = 1

describe('Comprar produto', () => {
   beforeEach(() => {
      cy.fixture('baseUser').then((user) => {
         cy.loginSession(user.email, user.password)
      })
   })

   it('Deve adicionar um produto ao carrinho', () => {
      cy.visit('/produtos')

      cy.get('div[data-product-id]').eq(PRODUCT_INDEX).within(() => {
         cy.contains('a[data-product_id]', "Ver opções")
            .should('exist')
            .click({ force: true })
      })

      cy.get('ul[data-attribute_name="attribute_size"] li').as('sizes')
      cy.get('ul[data-attribute_name="attribute_color"] li').as('colors')

      let foundCombination = false;

      cy.get('@sizes').each(($size) => {
         cy.wrap($size).click()

         cy.get('@colors').each(($color) => {
            cy.wrap($color).click()

            // Verificar se o botão ded comprar está desabilitado:
            // - Se estiver, deve continuar o loop para encontrar alguma combinação válida
            // - Se não, interrompe o loop e clica no botão
            cy.contains('button[type="submit"]', "Comprar").then(($btn) => {
               const disabled = $btn.is(':disabled') || $btn.hasClass('disabled');
               if (!disabled) {
                  foundCombination = true
                  cy.wrap($btn)
                     .click()
                     .then(() => {
                        // Lança um erro controlado para interromper os loops
                        throw new Error("STOP_TEST")
                     });
               }
            })
         })
      }).then(() => {
         if (!foundCombination) {
            throw new Error("Nenhuma combinação válida encontrada para esse produto!")
         }
      })
   })
})

Cypress.on("fail", (err) => {
   if (err.message.includes("STOP_TEST")) {
      return false; // Suprime a falha "STOP_TEST"
   }
   throw err;
});