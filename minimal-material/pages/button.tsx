import "./button.scss"

export default function Buttons() {
  return <article className="button">
    <section>
      <div>
        <h3 className="mdc-typography--subtitle1">Text Button</h3>
        <button className="mdc-button mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <span className="mdc-button__label">Default</span>
        </button>
        <button className="mdc-button mdc-button--dense mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <span className="mdc-button__label">Dense</span>
        </button>
        <button className="mdc-button mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <i className="material-icons mdc-button__icon">favorite</i>
          <span className="mdc-button__label">Icon</span>
        </button>
        <button className="mdc-button mdc-ripple-upgraded" disabled={true}>
          <span className="mdc-button__ripple"></span>
          <i className="material-icons mdc-button__icon">favorite</i>
          <span className="mdc-button__label">Icon</span>
        </button>
      </div>
      <div>
        <h3 className="mdc-typography--subtitle1">Raised Button</h3>
        <button className="mdc-button mdc-button--raised mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <span className="mdc-button__label">Default</span>
        </button>
        <button className="mdc-button mdc-button--dense mdc-button--raised mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <span className="mdc-button__label">Dense</span>
        </button>
        <button className="mdc-button mdc-button--raised mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <i className="material-icons mdc-button__icon">favorite</i>
          <span className="mdc-button__label">Icon</span>
        </button>
        <button className="mdc-button mdc-button--raised mdc-ripple-upgraded" disabled={true}>
          <span className="mdc-button__ripple"></span>
          <i className="material-icons mdc-button__icon">favorite</i>
          <span className="mdc-button__label">Icon</span>
        </button>
      </div>
      <div>
        <h3 className="mdc-typography--subtitle1">Unelevated Button</h3>
        <button className="mdc-button mdc-button--unelevated mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <span className="mdc-button__label">Default</span>
        </button>
        <button className="mdc-button mdc-button--dense mdc-button--unelevated mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <span className="mdc-button__label">Dense</span>
        </button>
        <button className="mdc-button mdc-button--unelevated mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <i className="material-icons mdc-button__icon">favorite</i>
          <span className="mdc-button__label">Icon</span>
        </button>
        <button className="mdc-button mdc-button--unelevated mdc-ripple-upgraded" disabled={true}>
          <span className="mdc-button__ripple"></span>
          <i className="material-icons mdc-button__icon">favorite</i>
          <span className="mdc-button__label">Icon</span>
        </button>

      </div>
      <div>
        <h3 className="mdc-typography--subtitle1">Outlined Button</h3>
        <button className="mdc-button mdc-button--outlined mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <span className="mdc-button__label">Default</span>
        </button>
        <button className="mdc-button mdc-button--dense mdc-button--outlined mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <span className="mdc-button__label">Dense</span>
        </button>
        <button className="mdc-button mdc-button--outlined mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <i className="material-icons mdc-button__icon">favorite</i>
          <span className="mdc-button__label">Icon</span>
        </button>
        <button className="mdc-button mdc-button--outlined mdc-ripple-upgraded" disabled={true}>
          <span className="mdc-button__ripple"></span>
          <i className="material-icons mdc-button__icon">favorite</i>
          <span className="mdc-button__label">Icon</span>
        </button>
      </div>
      <div>
        <h3 className="mdc-typography--subtitle1">Shaped Button</h3>
        <button className="mdc-button mdc-button--unelevated demo-button-shaped mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <span className="mdc-button__label">Default</span>
        </button>
        <button className="mdc-button mdc-button--dense mdc-button--unelevated demo-button-shaped mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <span className="mdc-button__label">Dense</span>
        </button>
        <button className="mdc-button mdc-button--unelevated demo-button-shaped mdc-ripple-upgraded">
          <span className="mdc-button__ripple"></span>
          <i className="material-icons mdc-button__icon">favorite</i>
          <span className="mdc-button__label">Icon</span>
        </button>
      </div>
    </section>
    <section>
      <div className="mm0_button_text_disabled_ content_favorite_button"></div>
      <div className="mm0_button_text_ content_favorite_button"></div>
      <div className="mm0_button_text_ content_default_button"></div>
    </section>
    <section>
    <div className="mm0_button_unelevated_disabled_ content_favorite_button"></div>
      <div className="mm0_button_unelevated_ content_favorite_button"></div>
      <div className="mm0_button_unelevated_ content_default_button"></div>
    </section>
    <section>
      <div className="mm0_button_outlined_disabled_ content_favorite_button"></div>
      <div className="mm0_button_outlined_ content_favorite_button"></div>
      <div className="mm0_button_outlined_ content_default_button"></div>
    </section>
    <section>
      <div className="mm0_button_raised_disabled content_favorite_button"></div>
      <div className="mm0_button_raised_ content_favorite_button"></div>
      <div className="mm0_button_raised_ content_default_button"></div>
    </section>
  </article>
}
