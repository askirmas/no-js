import "./typography.scss";

export default function Typoraphy() {
  return <article>
    <section><Examples className="mdc-typography--"/></section>
    <section><Examples className="mm_"/></section>
  </article>
}

function Examples({className}: {className: string}) {
  return <>
      <h1 className={`${className}headline1`}>Headline 1</h1>
      <h2 className={`${className}headline2`}>Headline 2</h2>
      <h3 className={`${className}headline3`}>Headline 3</h3>
      <h4 className={`${className}headline4`}>Headline 4</h4>
      <h5 className={`${className}headline5`}>Headline 5</h5>
      <h6 className={`${className}headline6`}>Headline 6</h6>
      <h6 className={`${className}subtitle1`}>Subtitle 1</h6>
      <h6 className={`${className}subtitle2`}>Subtitle 2</h6>
      <p className={`${className}body1`}>
        Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </p>
      <p className={`${className}body2`}>
        Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
        possimus nihil molestias sapiente necessitatibus dolor saepe
        inventore, soluta id accusantium voluptas beatae.
      </p>
      <div>
        <span className={`${className}button`}>Button text</span>
      </div>
      <div>
        <span className={`${className}caption`}>Caption text</span>
      </div>
      <div>
        <span className={`${className}overline`}>Overline text</span>
      </div>
  </>
}