describe("typography", () => {
  const page = "typography"
  before(() => cy.visit(page))

  it('screenshots', () => cy
    .get('[data-cy]')
    .within($els => {
      $els.css('display', "none")
    })
    .each($el => cy
      .wrap($el)
      .within(({0: {dataset: {cy: name}}}) => cy
        .root()
        .then($el => $el.css('display', '').css('grid-column', 1))
        // .then(({0: el}) => el.scrollIntoView())
        // .toMatchImageSnapshot({name: `${page} ${name}`})
        .matchImageSnapshot(`${page} ${name}`)
        // .compareSnapshot(`${page} ${name}`)
        .root()
        .then($el => $el.css('display', 'none'))
      )
    )
  )
})