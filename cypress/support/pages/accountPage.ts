declare global {
    namespace Cypress {
        interface Chainable {
            checkPopUp: typeof checkPopUp;
            checkClosePopUp: typeof checkClosePopUp;
            accountPageIsOpen: typeof accountPageIsOpen;
            checkAccountInfo: typeof checkAccountInfo;

        }
    }
}

export const checkSuccessPopup = (title: string): void => {
    cy.get('.i1xi3g69').contains(title).should('be.visible');
}

export const checkPopUp = (title: string, condition: string): void => {
    cy.contains('h4', title).should(`be.${condition}`);
}
export const checkClosePopUp = (title: string, ): void => {
    cy.contains('h4', title).should('not.exist');
}

export const accountPageIsOpen = (): void => {
    cy.url().should('include', '/dashboard');
}

export const checkAccountInfo = (title: string, value: string): void => {
    cy.contains('p', title)
        .parent()
        .find('h1')
        .should('have.text', value)
}

export const getAccountSettings = (): void => {
    cy.get('ul[role="presentation"]').find('span').contains('Profile').click();
}



Cypress.Commands.add('checkPopUp', checkPopUp);
Cypress.Commands.add('checkClosePopUp', checkClosePopUp);
Cypress.Commands.add('accountPageIsOpen', accountPageIsOpen);
Cypress.Commands.add('checkAccountInfo', checkAccountInfo);
