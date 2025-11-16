/// <reference types="cypress" />

Cypress.Commands.add('loginByApi', (username, password) => {
   return cy.request({
      method: 'POST',
      url: '/minha-conta',
      form: true,
      // Desabilita o redirecionamento do WooCommerce no WordPress para pegar os cookies
      followRedirect: false,
      body: {
         username,
         password,

         // Atributos do WooCommerce
         "woocommerce-login-nonce": "b687bef58a",
         "_wp_http_referer": "/minha-conta/",
         login: "Login"
      }
   }).then((response) => {
      expect(response.status).to.eq(302)

      const cookies = response.headers['set-cookie'];
      if (!cookies) return;

      cookies.forEach(cookieStr => {
         const [name, value] = cookieStr.split(';')[0].split('=');
         cy.setCookie(name, value);
      });
   })
})

Cypress.Commands.add('loginSession', (username, password) => {
   cy.session([username, password], () => {
      cy.loginByApi(username, password)
   })
})