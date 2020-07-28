describe("typography", () => {
  const page = "typography"
  before(() => cy.visit(page))

  it('screenshots', () => cy
    .get('[data-cy]')
    .each($el => cy
      .wrap($el)
      .within(({0: {dataset: {cy: name = '!'}}}) => cy
        .log(name)
        .root()
        .scrollIntoCenter()
        .toMatchImageSnapshot({name: `${page} ${name}`})
      )
    )
  )
})