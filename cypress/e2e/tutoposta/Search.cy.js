/// <reference types="cypress"/>
import indexPage from '../../support/pages/index'
import articlesPage from '../../support/pages/articlesPage'

describe('Search test cases', function(){
    before(() => {
        cy.log("Ejecutando precondiciones a las pruebas")
    })
    after(() => {
        cy.log("Ejecutando todas las postcondiciones a las pruebas");
    })
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php');
    })
    afterEach(() => {
        cy.log("Poniendo datos en su estado original")
    })
    it('Search dresses', function(){
        indexPage.search('dress');
        articlesPage.verifyArticle('"dress"');
        /*cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();          //deprecado al pasar a PageObject
        cy.get('.lighter').contains('"dress"');*/
    })
    it('Search hats', function(){
        indexPage.search('hats');
        articlesPage.verifyArticle('"hats"');
        /*cy.get('#search_query_top').type('hats');
        cy.get('#searchbox > .btn').click();          //deprecado al pasar a PageObject
        cy.get('.lighter').contains('"hats"');*/
    })
})