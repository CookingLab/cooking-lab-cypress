describe('Our Recipe flow tests', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-testid="cypress-personalRecipe"]').should('exist');
        cy.get('[data-testid="cypress-personalRecipe"]').click();
        cy.url().should('include', '/personalRecipe');
        cy.get('[data-testid="personal-recipes-title"]').should('exist');
        cy.get('[data-testid="personal-recipes-msg"]').should('exist');
        cy.get('[data-testid="tc-recipes-title"]').should('exist');
        cy.get('[data-testid="tm-recipes-title"]').should('exist');
        cy.get('[data-testid="tm-recipes-title"]').first().click();
        cy.get('.recipe-card').first().click();
        cy.url().should('include', '/recipe');
        cy.get('[data-testid="recipe-title"]').should('exist');
        cy.get('[data-testid="recipe-ingredient"]').should('exist');
        cy.get('[data-testid="recipe-ingredient-list"]').should('exist');
        cy.get('[data-testid="recipe-instructions"]').should('exist');
        cy.get('[data-testid="recipe-instructions-list"]').should('exist');
        cy.get('[data-testid="back-icon"]').should('exist');
    })
})
