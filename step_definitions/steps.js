const { I, login_page, home_page } = inject();
// Add in your custom step files

Given("I fill email", () => {
  // From "features\basic.feature" {"line":7,"column":5}
  I.waitForElement(login_page.fields.email, 20);
  I.fillField(login_page.fields.email, "teste@teste.com");
});

Given("I fill password", () => {
  // From "features\basic.feature" {"line":8,"column":5}
  I.fillField(login_page.fields.password, "123456");
});

When("I tap on Entrar", () => {
  // From "features\basic.feature" {"line":9,"column":5}
  I.tap(login_page.buttons.enter);
});

Then("I see the search field", () => {
  // From "features\basic.feature" {"line":10,"column":5}
  home_page.checkLoginSuccess();
});
