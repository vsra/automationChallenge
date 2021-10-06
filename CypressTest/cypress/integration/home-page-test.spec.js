/// <reference types="cypress" />
import 'cypress-file-upload';
import { size } from 'lodash';

import {mainPage} from '../integration/pageObjects/home-page'

const sizes = ['iphone-6', 'macbook-15']

describe('open the home page', () =>{
    const homePage = new mainPage()
    const filePath = '../integration/images/beach3.jpg'
    const description = 'This is a new item description'

    before(() =>  homePage.gotoUrl())

    sizes.forEach((size) => {



        it('Adding a new item', () => {
            cy.viewport(360, 640) //Mobile
            cy.viewport(768, 800) //Tablet
            cy.viewport(1920, 1080) //Desktop
            
            homePage.attachFile(filePath)
            homePage.addDescription(description)
            homePage.clickCreateItemButton()
            homePage.validateAddedDescription(description)
        })
    
        it('Edit another existing item', () => {
           const newDescription = 'This is a new description'
        
           homePage.editFirstItemDescription(newDescription)
           homePage.validateEditedDescription(newDescription)
        })
    
        it('Delete the item created' , () => {
            homePage.deleteLastItemAdded()
            homePage.validateLastItemDoesntExist(description)
        })
    
        it('Check max long in description', () => {
            const chars301 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec p'
    
            homePage.addDescription(chars301)
            homePage.validateCreateItemIsDisabled()
        })
    
        it('Verify if a text exist in the list descriptions', () => {
            const existingTextDescription = 'Creators: Matt Duffer, Ross Duffer'
    
            homePage.getAllDescriptionsAndVerifyText(existingTextDescription)
        })

    })
    

    

})