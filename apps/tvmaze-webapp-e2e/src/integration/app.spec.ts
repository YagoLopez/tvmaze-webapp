const SELECTOR1 =
  ':nth-child(1) > .MuiListItemText-root > .MuiTypography-root > [style="display: flex; align-items: center; font-size: small; color: graytext;"] > [style="margin-left: 1.5em;"] > :nth-child(2) > p'

const SELECTOR_LIST_ITEM =
  ':nth-child(1) > .MuiListItemText-root > .MuiTypography-root > [style="display: flex; align-items: center; font-size: small; color: graytext;"]'

const EXPECTED_TEXT1 = 'Search for Tv Shows'
const EXPECTED_TEXT2 = 'This Emmy winning series'

describe('Tests End to End', () => {
  beforeEach(() => cy.visit('https://tvmaze-webapp.vercel.app/'))

  it('should display correctly index page', () => {
    cy.get('.MuiCardContent-root > .MuiTypography-root').contains(
      EXPECTED_TEXT1
    )
  })

  it('should make search correctly', () => {
    cy.get('#input_search').type('girls')
    cy.get('#btn-search').click()
    cy.get(SELECTOR1).contains(EXPECTED_TEXT2)
  })

  it('should display show detail correctly', () => {
    cy.get('#input_search').type('girls')
    cy.get('#btn-search').click()
    cy.get(SELECTOR1).contains(EXPECTED_TEXT2)
    cy.get(SELECTOR_LIST_ITEM).click()
    cy.get('.MuiTypography-h5').contains('Girls')
  })
})

describe('Test Deep Linking', () => {
  beforeEach(() => cy.visit('http://localhost:4200/search/girls'))

  it('should display search list correctly', () => {
    cy.get(SELECTOR1).contains(EXPECTED_TEXT2)
  })
})
