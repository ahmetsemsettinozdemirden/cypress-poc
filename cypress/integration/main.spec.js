// main.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// describe("My First Test", () => {
//     it("Does not do much!", () => {
//         expect(true).to.equal(true);
//     });

//     it("Visit App", () => {
//         cy.visit("/");
//     });
// });

describe("example to-do app", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("it focuses the input", () => {
        cy.get(".add-todo").type("test{enter}");
        cy.get(".todo-list li").should("have.length", 4);
        cy.get(".todo-list li div label").last().should("have.text", "test");
    });
});
