/// <reference types="cypress" />

context('Backend General Test', () => {

  it('should make an get all coffee request', () => {
    cy.request('http://localhost:5000/coffee/all')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('length').and.be.gte(10)
        expect(response).to.have.property('headers')
      })
  })

  it('should make an get one coffee request', () => {
    cy.request('http://localhost:5000/coffee/1')
      .its('body')
      .should('be.an', 'object')
      .should('contain', {
        id: 1,
    })
  })

  it('should get hot coffee request', () => {
    cy.request('http://localhost:5000/category/hot')
    .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('length').and.be.gte(10)
      expect(response).to.have.property('headers')
    })
  })

  it('should get iced coffee request', () => {
    cy.request('http://localhost:5000/category/iced')
    .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('length').and.be.lte(10)
      expect(response).to.have.property('headers')
    })
  })

  it('should make an get all coffee categories request', () => {
    cy.request('http://localhost:5000/categories')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('length').and.be.eq(2)
        expect(response).to.have.property('headers')
      })
  })

})
