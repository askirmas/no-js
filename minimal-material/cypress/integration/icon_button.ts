describe('icon_button', () => {
  const page = "icon_button"
  before(() => cy.visit(page))
  it('screenshots', () => cy
    .get('[data-cy]')
    .each($el => cy
      .wrap($el)
      .scrollIntoView()
      .toMatchImageSnapshot({name: `${page} ${$el[0].dataset.cy}`})
      // .matchImageSnapshot(`${page} ${$el[0].dataset.cy}`)
    )
  )
})