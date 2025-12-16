const { I, page_login, home_page } = inject();
// Add in your custom step files

Given("I fill email", () => {
  // From "features\basic.feature" {"line":7,"column":5}
  I.waitForElement(page_login.fields.email, 20);
  I.fillField(page_login.fields.email, "teste@teste.com");
});

Given("I fill password", () => {
  // From "features\basic.feature" {"line":8,"column":5}
  I.fillField(page_login.fields.password, "123456");
});

When("I tap on Entrar", () => {
  // From "features\basic.feature" {"line":9,"column":5}
  I.tap(page_login.buttons.enter);
});

Then("I see the search field", () => {
  // From "features\basic.feature" {"line":10,"column":5}
  home_page.checkLoginSuccess();
});
