describe("elevation", () => {
  const page = "elevation"
  before(() => cy.visit(page))

  it('screenshots', () => cy
    .get('[data-cy]')
    .each($el => cy
      .wrap($el)
      .within(({0: {dataset: {cy: name = "!"}}}) => cy
        .log(name)
        .root()
        .scrollIntoView()
        .toMatchImageSnapshot({name: `${page} ${name}`})
        // .matchImageSnapshot(`${page} ${name}`)
        // .compareSnapshot(`${page} ${name}`)
      )
    )
  )
})