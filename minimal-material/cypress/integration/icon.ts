describe('icon', () => {
  const page = "icon"
  before(() => cy.visit(page))
  it('screenshots', () => cy
    .get('[data-cy]')
    .each($el => cy
      .wrap($el)
      .toMatchImageSnapshot({name: `${page} ${$el[0].dataset.cy}`})
      // .matchImageSnapshot(`${page} ${$el[0].dataset.cy}`)
    )
  )
})