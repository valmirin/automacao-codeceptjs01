const { I } = inject();

module.exports = {
  button: {
    search: "#search-field",
  },

  checkLoginSuccess() {
    I.waitForElement(this.button.search, 10);
    I.seeElement(this.button.search);
  },
};
