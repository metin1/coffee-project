/// <reference types="cypress" />

context('Frontend General Test', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })


  it('should header and navbar menu items as expected', () => {
    cy.screenshot()
    cy.get('.header').contains('Coffees')
    cy.get('.header').contains('About Us')
    cy.get('[data-testid=header-logo]').should("be.visible")

  })

  it('should hero section and content as expected', () => {
    cy.get('h1').contains('TAKE A BREAK')
    cy.get('.light').contains('DRINK SOME COFFEE')
    cy.get('[data-testid=landing-paragraph]').contains('Forget everything and take a break. Select your coffee, hot or cold, whatever you want, choose according to your taste Relax yourself, get your energy again. Feel comfortable have a seat and share this time with your friends.')
    cy.get('.button').contains('Choose Your Drink')
  })

  it('should footer section and check social media links true as expected', () => {
    cy.screenshot()
    cy.get('[data-testid=footer-logo]').should("be.visible")
    cy.contains('Coffee Corp © 2021')
    cy.get('[data-testid=footer-facebook]')
      .should("be.visible")
      .parent()
      .should('have.attr', 'href')
      .and('include', 'facebook')
    cy.get('[data-testid=footer-instagram]')
      .should("be.visible")
      .parent()
      .should('have.attr', 'href')
      .and('include', 'instagram')
    cy.get('[data-testid=footer-youtube]')
      .should("be.visible")
      .parent()
      .should('have.attr', 'href')
      .and('include', 'youtube')
    cy.get('[data-testid=footer-twitter]')
      .should("be.visible")
      .parent()
      .should('have.attr', 'href')
      .and('include', 'twitter')
  })

  it('should cta button forward to coffee page', () => {
    cy.get('.button').contains('Choose Your Drink').click()
    cy.screenshot()
    cy.get('[data-testid=coffee-head]').contains("Our Coffees")
  })

  it('should coffee page as expected', () => {
    cy.get('.category-content-item-selected').contains("All Coffees")
    cy.get('#coffee-menu').find('.category-content-item').should('have.length', 3)
    cy.get('#coffee-menu').contains("hot")
    cy.get('#coffee-menu').contains("iced")
    cy.get('#coffee-search').should("be.empty")
    cy.get('#coffee-content').contains("Black")
  })

  it('should coffee list change with category change and search filter the coffees', () => {
    cy.get('#coffee-menu').contains("iced").click()
    cy.screenshot()
    cy.get('.category-content-item-selected').contains("iced")
    cy.get('#coffee-content').contains("Iced Coffee")
    cy.get('#coffee-search').type("cold")
    cy.get('#coffee-content').contains("Cold Brew")
    cy.get('#coffee-menu').contains("hot").click()
    cy.screenshot()
    cy.get('.category-content-item-selected').contains("hot")
    cy.get('#coffee-content').contains("There is no record.")
    cy.get('#coffee-menu').contains("All Coffees").click()
    cy.get('.category-content-item-selected').contains("All Coffees")
  })

  it('should change about page when click navbar and about page as expected', () => {
    cy.get('.header').contains('About Us').click()
    cy.screenshot()
    cy.get('.about-top').get('h1').contains('Coffee Corp')
    cy.get('[data-testid=coffee-motto]').contains("Hot, iced Coffees Made for you")
    cy.get('.about-main').contains("About Us")
    cy.get('.about-main').contains("Contact Us")
  })

  it('should return landing page when clicking header icon', () => {
    cy.get('[data-testid=header-logo]').click()
    cy.screenshot()
    cy.get('h1').contains('TAKE A BREAK')
    cy.get('.light').contains('DRINK SOME COFFEE')
  })
})
