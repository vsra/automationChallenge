/// <reference types="cypress" />

export class mainPage{

    gotoUrl() {
        cy.visit('http://immense-hollows-74271.herokuapp.com/')
    }

    attachFile(filePath) {
        cy.get('#inputImage').attachFile(filePath)
    }

    addDescription(description) {
        cy.get(':nth-child(3) > .controls > .form-control').type(description)
    }

    clickCreateItemButton() {
        cy.get('.ng-scope > .btn').click()
    }

    validateAddedDescription(description) {
        cy.get('div.ng-scope > ul > li:last-child > div > div > div:nth-child(2) > p').should('have.text', description)
    }

    editFirstItemDescription(newDescription) {
        cy.get(':nth-child(1) > .media-left > .media-body > .btn-group > [ng-click="strangerlist.setCurrentItem(item)"]').click()
        cy.get('div.controls > textarea').clear()
        cy.get('div.controls > textarea').type(newDescription)
        cy.get('.ng-scope > .pull-right').click()
    }

    validateEditedDescription(newDescription) {
        cy.get('div.ng-scope > ul > li:nth-child(1) > div > div > div:nth-child(2) > p').should('have.text', newDescription)
    }

    deleteLastItemAdded() {
        cy.get('div.ng-scope > ul > li:last-child > div > div > div > button:nth-child(2)').click()
        cy.get('div.modal-dialog > div > div.modal-footer > button.btn-primary').click()
    }

    validateLastItemDoesntExist(itemDescription) {
        cy.get('div.ng-scope > ul > li:last-child > div > div > div:nth-child(2) > p').should('not.have.text', itemDescription)
    }

    validateCreateItemIsDisabled() {
        cy.get('.ng-scope > .btn').should('be.disabled')
        cy.get('div.controls > textarea').clear()
    }

    getAllDescriptionsAndVerifyText(textExist) {
        cy.get('div.ng-scope > ul > li > div > div > div:nth-child(2) > p').should(($descriptions) => {
            expect($descriptions).to.contain(textExist)
          })
    }
  
    

}