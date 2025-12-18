Feature("login");

const { I, login_page } = inject();

// É executado 1x antes de começar a rodar a suíte inteira
BeforeSuite(() => {
  console.log("Teste Antes suite...");
});

// É executado antes de começar a rodar cada um dos cenários de testes
Before(() => {
  console.log("Antes de rodar os testes...");
});

// É executado 1x depois de rodar a suíte inteira
AfterSuite(() => {
  console.log("Teste Após suite...");
});

// É executado depois de rodar cada um dos cenários de testes
After(() => {
  console.log("Depois de rodar os testes...");
});

Scenario("Login with success", async ({ I, login_page, home_page }) => {
  login_page.doLogin("teste@teste.com", "123456");

  // validar
  home_page.checkLoginSuccess();

  // Fazer scroll até encontrar o elemento "Bulldog Hamburgueria"
  await I.scrollDownToElement('//*[@text="Bulldog Hamburgueria"]');

  // Valida que o elemento está visível
  I.seeElement('//*[@text="Bulldog Hamburgueria"]');

  // I.waitForElement("#search-field", 10);
  // I.seeElement("#search-field");
  // I.waitForElement("#email", 10);
  // // preencher campo email
  // // Acessibility id coloca ~email
  // // ID coloca #
  // // Para acessar o name não precisa passar nada, somente o nome
  // I.fillField("#email", "teste@teste.com");

  // // preencher campo senha
  // I.fillField("#password", "123456");

  // // clicar em Entrar
  // I.tap("#login-button");
}).tag("@login_sucesso");

Scenario("Login with error", () => {
  login_page.doLogin("xteste@teste.com", "123456");

  // validar
  login_page.checkLoginError();

  // I.waitForElement(
  //   '//*[@text="Erro ao realizar login" or @label="Erro ao realizar login"]',
  //   10
  // );
  // I.seeElement(
  //   '//*[@text="Erro ao realizar login" or @label="Erro ao realizar login"]'
  // );
  // I.waitForElement("#email", 10);
  // // preencher campo email
  // // Acessibility id coloca ~email
  // // ID coloca #
  // // Para acessar o name não precisa passar nada, somente o nome
  // I.fillField("#email", "xteste@teste.com");

  // // preencher campo senha
  // I.fillField("#password", "123456");

  // // clicar em Entrar
  // I.tap("#login-button");
});

// pause() É utilizado para debugar o código, pode ser inserido no cenário, no arquivo de page objetcs
// retry(N) É usado para tentar rodar aquela ação novamente, no total de N vezes
