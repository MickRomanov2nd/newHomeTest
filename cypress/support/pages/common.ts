declare global {
    namespace Cypress {
        interface Chainable {
            setData: typeof setData;
            buttonClick: typeof buttonClick;
            login: typeof login;
            pageIsOpen: typeof pageIsOpen;
            selectCountry: typeof selectCountry;
            getError: typeof getError;
            submitClick: typeof submitClick;
            selectCheckbox: typeof selectCheckbox;
        }
    }
}
export const setData = (fieldName: string, value: string): void => {
    cy.get(`input[name="${fieldName}"]`).type(value)
}

export const buttonClick = (buttonText: string): void => {
    cy.contains('li,a,button', buttonText).click();
}

export const submitClick = (buttonText: string): void => {
    cy.contains('button[type="submit"]', buttonText).click();
}

export const setParam = (paramName: string): void => {
    cy.contains('label', paramName).click();
}

export const login = (login: string, password: string): void => {
    setData('email', login);
    setData('password', password);
    buttonClick('Sign in');
    cy.wait(5000)
    buttonClick('Allow all');
}

export const pageIsOpen = (title: string): void => {
    cy.contains('h3', title).should('be.visible');
}

export const selectCountry = (countryName: string): void => {
    cy.contains('h4', 'Country')
        .parent()
        .find('input[class="select__input"]')
        .click()
        .type(countryName)
        .type('{Enter}')
}

export const getError = (errorText: string): void => {
    cy.contains('span', errorText).should('be.visible');
}

export const selectCheckbox = (checkboxText: string): void => {
    cy.contains('label', checkboxText).find('input[type="checkbox"]').click();
}

Cypress.Commands.add('setData', setData);
Cypress.Commands.add('buttonClick', buttonClick);
Cypress.Commands.add('login', login);
Cypress.Commands.add('pageIsOpen', pageIsOpen);
Cypress.Commands.add('selectCountry', selectCountry);
Cypress.Commands.add('getError', getError);
Cypress.Commands.add('submitClick', submitClick);
Cypress.Commands.add('selectCheckbox', selectCheckbox);
