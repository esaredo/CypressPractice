/// <reference types="cypress"/>

describe('formas de encontrar un elemento' , function(){
    it('buscar en el buscador' , function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('Probando1'); //búsqueda por clase
        cy.get('#search_query_top').type('2'); //búsqueda por ID
        cy.get('[name="search_query"]').type('3'); //Búsqueda por cualquier otra propiedad
        cy.get('[placeholder="Search"]').clear(); //borra lo que está en el elemento
    })
})