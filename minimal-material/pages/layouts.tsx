import Button from "../mwcr/Button";
import ButtonIcon from "../mwcr/ButtonIcon";
import ButtonToggler from "../mwcr/ButtonToggler";
import TabItem from "../mwcr/TabItem";
import ButtonFloat from "../mwcr/ButtonFloat";
import FieldSet from "../Components/Fieldset";
import { ReactText, PropsWithChildren } from "react";

export default function Layouts() {
  return <article className="suite_vertical">
    <FieldSet legend="button">
      <FieldSet legend="G">
        <Button {...{outlined: true}}>Outlined</Button>
        <Button {...{icon: "favorite", unelevated: true}}>Unelevated </Button>
      </FieldSet>
      <FieldSet legend="M" className="box-check">
        <div className="mm_2_button content_favorites"/>
      </FieldSet>
    </FieldSet>

    <FieldSet legend="icon">
      <FieldSet legend="G">
        <ButtonIcon {...{icon: "favorite"}}/>
        <ButtonToggler {...{icon: "favorite_border", iconOn: "favorite"}}/>
      </FieldSet>
      <FieldSet legend="M" className="box-check">
        <div className="mm_2_icon_button content_favorites"/>
      </FieldSet>
    </FieldSet>

    <FieldSet legend="fab">
      <FieldSet legend="G">
        <ButtonFloat {...{icon: "favorite"}}/>
        <ButtonFloat {...{icon: "favorite", mini: true}}/>
        <ButtonFloat {...{icon: "favorite", extended: true}}>Create</ButtonFloat>
        <ButtonFloat {...{icon: "favorite", extended: true, reverse: true}}>Create</ButtonFloat>
      </FieldSet>
      <FieldSet legend="M" className="box-check">
        <div className="mm_2_fab_icon content_favorites"/>
        <div className="mm_2_fab_min content_favorites"/>
        <div className="mm_2_fab content_favorites"/>
        <div className="mm_2_fab_rev content_favorites"/>
      </FieldSet>
    </FieldSet>

    <FieldSet legend="tabItem">
      <FieldSet legend="G">
        <TabItem {...{icon: "favorite"}}>Tab item</TabItem>,
        <TabItem {...{icon: "favorite", vertical: true, checked: true}}>Vertical</TabItem>,
      </FieldSet>
      <FieldSet legend="M" className="box-check">
        <div className="mm_2_tab_item content_favorites"/>
        <div className="mm_2_tab_item_vert content_favorites"/>
      </FieldSet>
    </FieldSet>

    <FieldSet legend="chips">
      <FieldSet legend="G">
        <div className="mdc-chip-set mdc-chip-set--choice">
          <div className="mdc-chip mdc-chip--selected mdc-ripple-upgraded" role="row" id="mdc-chip-7">
            <span role="button" tabIndex={0} className="mdc-chip__text">Medium</span>
          </div>
        </div>
        <div className="mdc-chip mdc-ripple-upgraded" role="row" id="mdc-chip-15">
          <i className="material-icons mdc-chip__icon mdc-chip__icon--leading mdc-chip__icon--leading">face</i>
          <div className="mdc-chip__checkmark"><svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30"><path className="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg></div>
          <span role="button" tabIndex={0} className="mdc-chip__text">Bob</span>
        </div>
      </FieldSet>
      <FieldSet legend="M" className="box-check">
      </FieldSet>
    </FieldSet>

    <FieldSet legend="checkbox">
      <FieldSet legend="G">
        <div className="mdc-checkbox demo-checkbox mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" >
          <input type="checkbox" className="mdc-checkbox__native-control"/>
          <div className="mdc-checkbox__background">
            <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path className="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>
            <div className="mdc-checkbox__mixedmark"></div>
          </div>
          <div className="mdc-checkbox__ripple"></div>
        </div>
        <div className="mdc-checkbox mdc-checkbox--selected demo-checkbox mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" >
          <input type="checkbox" className="mdc-checkbox__native-control" aria-checked="mixed"/>
          <div className="mdc-checkbox__background">
            <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path className="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>
            <div className="mdc-checkbox__mixedmark"></div>
          </div>
          <div className="mdc-checkbox__ripple"></div>
          </div>
        <div className="mdc-checkbox mdc-checkbox--selected demo-checkbox mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" >
          <input type="checkbox" className="mdc-checkbox__native-control"/>
          <div className="mdc-checkbox__background">
            <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path className="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>
            <div className="mdc-checkbox__mixedmark"></div>
          </div>
          <div className="mdc-checkbox__ripple"></div>
        </div>
      </FieldSet>
      <FieldSet legend="M" className="box-check">
      </FieldSet>
    </FieldSet>

    <FieldSet legend="radio">
      <FieldSet legend="G">
        <div className="mdc-form-field demo-radio-form-field">
          <div className="mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" >
            <input className="mdc-radio__native-control" type="radio" id="0.8963774249705583" name="demo-radio-set" checked={true}/>
            <div className="mdc-radio__background">
              <div className="mdc-radio__outer-circle"></div>
              <div className="mdc-radio__inner-circle"></div>
            </div>
            <div className="mdc-radio__ripple"></div>
            </div><label htmlFor="0.8963774249705583">Radio 1</label>
          </div>
        <div className="mdc-form-field demo-radio-form-field">
          <div className="mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" >
            <input className="mdc-radio__native-control" type="radio" id="0.5378705065642404" name="demo-radio-set"/>
            <div className="mdc-radio__background">
              <div className="mdc-radio__outer-circle"></div>
              <div className="mdc-radio__inner-circle"></div>
            </div>
            <div className="mdc-radio__ripple"></div>
          </div><label htmlFor="0.5378705065642404">Radio 2</label></div>
      </FieldSet>
      <FieldSet legend="M" className="box-check">
      </FieldSet>
    </FieldSet>

    <FieldSet legend="switch">
      <FieldSet legend="G">
        <div className="switch-demo"><span>
          <div className="mdc-switch">
            <div className="mdc-switch__track"></div>
            <div className="mdc-switch__thumb-underlay mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" >
              <div className="mdc-switch__thumb">
                <input type="checkbox" id="Switch-switch" className="mdc-switch__native-control" role="switch" aria-checked="false"/>
              </div>
            </div>
          </div>
          <label htmlFor="Switch-switch">off/on</label>
        </span></div>
        <span>
          <div className="mdc-switch mdc-switch--checked">
            <div className="mdc-switch__track"></div>
            <div className="mdc-switch__thumb-underlay mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" >
              <div className="mdc-switch__thumb"><input type="checkbox" id="Switch-switch" className="mdc-switch__native-control" role="switch" aria-checked="true"/>
              </div>
            </div>
          </div>
          <label htmlFor="Switch-switch">off/on</label>
        </span>
      </FieldSet>
      <FieldSet legend="M" className="box-check">
      </FieldSet>
    </FieldSet>

    <FieldSet legend="">
      <FieldSet legend="G">
      </FieldSet>
      <FieldSet legend="M" className="box-check">
      </FieldSet>
    </FieldSet>

  </article>
}
