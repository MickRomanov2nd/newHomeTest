import {
    buttonClick,
    getError,
    login,
    pageIsOpen, selectCheckbox,
    selectCountry,
    setData,
    setParam,
    submitClick
} from "../support/pages/common";
import {checkPopUp, checkSuccessPopup, getAccountSettings} from "../support/pages/accountPage";

describe('Account actions tests', () => {
    before(() => {
        cy.visit(Cypress.env('baseUrl'))
    });

    /** Для выполнения тестов требуется пользователь, который зашел в систему и закрыл пуш, данные не вводил */
    it('Edit profile', () => {
        login(Cypress.env('userForActions').username, Cypress.env('userForActions').password);
        buttonClick(Cypress.env('userForActions').username);
        getAccountSettings();
        pageIsOpen('Account');
        buttonClick('Edit');
        pageIsOpen('Account type');
        setParam('Business');
        setParam('$');
        setParam('Business');
        setParam('Marketing newsletter subscription');
        setData('fname', 'Test');
        setData('lname', 'User');
        setData('phone_number', Cypress.env('userForActions').phoneNumber);
        setData('name', 'User Business');
        selectCountry('Serbia');
        setData('billing_address_city', 'Belgrade');
        setData('billing_address_region', 'Belgrade');
        setData('billing_address_postalcode', '101801');
        setData('billing_address_street', 'Bulevar Mihaila Pupina 10z/IV, Белград 11000 Сербия');
        buttonClick('Save');
        checkSuccessPopup('Success');
        buttonClick(Cypress.env('userForActions').username);
        buttonClick('Logout');

    });

    it.only('Cloud server buying', () => {
        login(Cypress.env('userForActions').username, Cypress.env('userForActions').password);
        buttonClick('Cloud Servers');
        buttonClick('Create & Manage');
        pageIsOpen('Cloud Servers');
        buttonClick('Create server');
        pageIsOpen('Location');
        setParam('Luxembourg');
        setParam('Debian 11 (64 bit)');
        setParam('SSD.100');
        buttonClick('Generate new SSH key');
        setData('name', 'ServerName');
        cy.wait(3000);
        submitClick('Create Cloud Server');
        pageIsOpen('Payment methods');
        selectCheckbox('I declare that I have read, understood and accept');
        buttonClick('Add new card');
        pageIsOpen('Add new card');
        setData('PaymentData[pan]', Cypress.env('userForActions').cardNumber);
        setData('PaymentData[card_holder]', Cypress.env('userForActions').cardholderName);
        setData('PaymentData[month]', Cypress.env('userForActions').month);
        setData('PaymentData[year]', Cypress.env('userForActions').year);
        setData('PaymentData[cvv]', Cypress.env('userForActions').year);
        buttonClick('Verify');
        /** Карта сгенерирована, потому и ошибка */
        getError('Unfortunately, your card was declined. Please try again later or change your payment details.')
        buttonClick(Cypress.env('userForActions').username);
        buttonClick('Logout');
    });

    it('Deactivate user', () => {
        login(Cypress.env('userForRemove').username, Cypress.env('userForRemove').password);
        buttonClick(Cypress.env('userForRemove').username);
        buttonClick('Profile');
        pageIsOpen('Account');
        buttonClick('Deactivate user');
        checkPopUp('Are you sure?', 'visible');
        buttonClick('Deactivate');
        checkPopUp('Password required', 'visible');
        setData('token', Cypress.env('userForRemove').password);
        buttonClick('Continue');
        pageIsOpen('Dear user, log in to access the Self Service Panel.')
    });

});
