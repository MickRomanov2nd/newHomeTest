import {buttonClick, setData} from "../support/pages/common";
import {
  accountPageIsOpen,
  checkAccountInfo,
  checkClosePopUp,
  checkPopUp,
} from "../support/pages/accountPage";

describe('Login and logout tests', () => {
  before(() => {
    cy.visit(Cypress.env('baseUrl'))
  })

  /** Пользователь заходит впервые */
  it('Login and logout', () => {
    setData('email', Cypress.env('user').username);
    setData('password', Cypress.env('user').password);
    buttonClick('Sign in');
    cy.wait(5000);
    checkPopUp('Please fill your account info', 'visible');
    buttonClick('×');
    checkClosePopUp('Please fill your account info');
    accountPageIsOpen();
    checkAccountInfo('Balance', '€0.00');
    checkAccountInfo('Estimated next balance', '€0.00');
    checkAccountInfo('servers in service', '0');
    buttonClick(Cypress.env('user').username);
    buttonClick('Logout');
  })
})
