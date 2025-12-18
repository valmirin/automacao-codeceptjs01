// in this file you can append custom step methods to 'I' object
const { container } = require('codeceptjs');

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    async scrollDownToElement(selector, maxAttempts = 10) {
      const appiumHelper = container.helpers('Appium');
      const browser = appiumHelper.browser;

      for (let i = 0; i < maxAttempts; i++) {
        console.log(`Tentativa ${i + 1} de scroll...`);

        // Verifica se o elemento está visível
        try {
          const elements = await this.grabNumberOfVisibleElements(selector);
          if (elements > 0) {
            console.log(`Elemento encontrado!`);
            return true;
          }
        } catch (e) {
          // Continua se não encontrou
        }

        // Faz scroll usando W3C Actions API
        try {
          await browser.action('pointer', {
            parameters: { pointerType: 'touch' }
          })
          .move({ x: 500, y: 1500 })
          .down()
          .pause(100)
          .move({ duration: 800, x: 500, y: 500 })
          .up()
          .perform();
        } catch (e) {
          console.log('Erro ao fazer scroll:', e.message);
        }

        await this.wait(1);
      }

      throw new Error(`Elemento ${selector} não encontrado após ${maxAttempts} tentativas de scroll`);
    }

  });
}
