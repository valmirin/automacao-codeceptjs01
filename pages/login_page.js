const { I } = inject();

module.exports = {
  fields: {
    email: "#email",
    password: "#password",
  },

  buttons: {
    enter: "#login-button",
  },

  messages: {
    login_error:
      '//*[@text="Erro ao realizar login" or @label="Erro ao realizar login"]',
  },

  doLogin(email, password) {
    I.waitForElement(this.fields.email, 20);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.tap(this.buttons.enter);
  },

  checkLoginError() {
    I.waitForElement(this.messages.login_error, 10);
    I.seeElement(this.messages.login_error);
  },
};
