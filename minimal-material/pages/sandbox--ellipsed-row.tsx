import "../styles/sandbox--ellipsed-row.scss"

export default function EllipedRow() {
  const ex1Children = <div className="flex-child short-and-fixed"><div/><div/><div/></div>

  return <article className="ellipsed-row">
    <section className="me">
      <div className="container">
        <div className="content-0"/>
        <div className="content-1"/>
        <div className="content-2"/>
      </div>
    </section>
    <section className="ex1">
      <a href="https://medium.com/@gaurav5430/css-flex-positioning-gotchas-child-expands-to-more-than-the-width-allowed-by-the-parent-799c37428dd6">https://medium.com/@gaurav5430/css-flex-positioning-gotchas-child-expands-to-more-than-the-width-allowed-by-the-parent-799c37428dd6</a>
      <div className="flex-parent">
        <div className="flex-child long-and-truncated">
          1. This is a long string that is OK to truncate please and thank you
        </div>
        {ex1Children}
      </div>

      <div className="flex-parent">
        <div className="flex-child long-and-truncated-with-child-corrected">
          <h2>3. This is a long string that is OK to truncate please and thank you</h2>
        </div>
        {ex1Children}
      </div>
    </section>
    <section className="ex2">
      <a href="https://stackoverflow.com/a/39473383/9412937">https://stackoverflow.com/a/39473383/9412937</a>
      <div className="outer">
        <div className="inner">{
          new Array(8).fill(0).map((_, i) => <div className="child" key={i}>child {i}</div>)
        }</div>
        <div className="btn">My big big big button!</div>
      </div>
    </section>
  </article>
}
