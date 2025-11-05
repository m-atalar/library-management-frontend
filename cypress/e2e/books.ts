import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("kullanıcı ana sayfada", () => {
  cy.visit("/");
});

When("sayfa yüklendiğinde", () => {
  cy.wait(1000); // Sayfanın yüklenmesini bekle
});

Then("kitap listesi görünür olmalı", () => {
  cy.get('[data-testid="books-list"]').should("be.visible");
});

Then("en az {int} kitap gösterilmeli", (count: number) => {
  cy.get('[data-testid="book-item"]').should("have.length.at.least", count);
});

Then("her kitap için başlık gösterilmeli", () => {
  cy.get('[data-testid="book-item"]').each(($book) => {
    cy.wrap($book).find('[data-testid="book-title"]').should("exist");
  });
});

Then("her kitap için yazar gösterilmeli", () => {
  cy.get('[data-testid="book-item"]').each(($book) => {
    cy.wrap($book).find('[data-testid="book-author"]').should("exist");
  });
});

Then("her kitap için açıklama gösterilmeli", () => {
  cy.get('[data-testid="book-item"]').each(($book) => {
    cy.wrap($book).find('[data-testid="book-description"]').should("exist");
  });
});
