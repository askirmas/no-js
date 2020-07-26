import Button from "../mwcr/Button";
import ButtonIcon from "../mwcr/ButtonIcon";
import ButtonToggler from "../mwcr/ButtonToggler";
import TabItem from "../mwcr/TabItem";
import ButtonFloat from "../mwcr/ButtonFloat";
import FieldSet from "../Components/Fieldset";

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

    <FieldSet legend="lists">
      <FieldSet legend="G">
        <div><h3 className="mdc-typography--subtitle1">Single-Line</h3><ul className="mdc-list demo-list"><li className="mdc-list-item mdc-ripple-upgraded" tabIndex={0} id="9bf01474-404c-46f3-9de4-ab5e30906ffe">Line item</li><li className="mdc-list-item mdc-ripple-upgraded" id="a942a2d9-f308-417f-b6df-05c011dc0d3e" tabIndex={-1}>Line item</li><li className="mdc-list-item mdc-ripple-upgraded" id="c30f7dc3-cd8a-42d9-a9cc-a93621cc5627" tabIndex={-1}>Line item</li></ul></div><div><h3 className="mdc-typography--subtitle1">Two-Line</h3><ul className="mdc-list demo-list mdc-list--two-line"><li className="mdc-list-item mdc-ripple-upgraded" tabIndex={0} id="d8124440-1d1b-4578-87b9-313de7857907"><span className="mdc-list-item__text"><span className="mdc-list-item__primary-text">Line item</span><span className="mdc-list-item__secondary-text">Secondary text</span></span></li><li className="mdc-list-item mdc-ripple-upgraded" id="107394ce-b6f2-4af4-8239-90355ab7168b" tabIndex={-1}><span className="mdc-list-item__text"><span className="mdc-list-item__primary-text">Line item</span><span className="mdc-list-item__secondary-text">Secondary text</span></span></li><li className="mdc-list-item mdc-ripple-upgraded" id="4b908a9f-cd44-4d42-98bb-74813ceadae4" tabIndex={-1}><span className="mdc-list-item__text"><span className="mdc-list-item__primary-text">Line item</span><span className="mdc-list-item__secondary-text">Secondary text</span></span></li></ul></div><div><h3 className="mdc-typography--subtitle1">Leading Icon</h3><ul className="mdc-list demo-list"><li className="mdc-list-item mdc-ripple-upgraded" tabIndex={0} id="cd6060e8-13e8-42df-9034-2488de347f26"><span className="mdc-list-item__graphic material-icons" aria-hidden="true">wifi</span>Line item</li><li className="mdc-list-item mdc-ripple-upgraded" id="720570bd-bd35-454c-b63c-556f89185af9" tabIndex={-1}><span className="mdc-list-item__graphic material-icons" aria-hidden="true">bluetooth</span>Line item</li><li className="mdc-list-item mdc-ripple-upgraded" id="62ff4506-d704-47fc-af47-817fe88c12c5" tabIndex={-1}><span className="mdc-list-item__graphic material-icons" aria-hidden="true">data_usage</span>Line item</li></ul></div><div><h3 className="mdc-typography--subtitle1">List with activated item</h3><ul className="mdc-list demo-list"><li className="mdc-list-item mdc-ripple-upgraded" id="c4da8092-e9bc-447d-b89e-030d54403f37" tabIndex={-1}><span className="mdc-list-item__graphic material-icons" aria-hidden="true">inbox</span>Inbox</li><li className="mdc-list-item mdc-list-item--activated mdc-ripple-upgraded" id="88180d76-636e-478d-97f9-8221987e9cbc" tabIndex={-1} aria-selected="true"><span className="mdc-list-item__graphic material-icons" aria-hidden="true">star</span>Star</li><li className="mdc-list-item mdc-ripple-upgraded" id="39999a13-82a9-40d5-a0a9-83a307703691" tabIndex={-1}><span className="mdc-list-item__graphic material-icons" aria-hidden="true">send</span>Send</li><li className="mdc-list-item mdc-ripple-upgraded" id="c29ea544-0e91-47b6-b1e1-98c2447dcb0b" tabIndex={-1}><span className="mdc-list-item__graphic material-icons" aria-hidden="true">drafts</span>Drafts</li></ul></div><div><h3 className="mdc-typography--subtitle1">List with shaped activated item</h3><ul className="mdc-list demo-list demo-list-item-shaped"><li className="mdc-list-item mdc-ripple-upgraded" id="f6b8c9df-c36a-462a-8271-1f9a1ef23f6d" tabIndex={-1}><span className="mdc-list-item__graphic material-icons" aria-hidden="true">inbox</span>Inbox</li><li className="mdc-list-item mdc-list-item--activated mdc-ripple-upgraded" id="8ae9c938-75ea-4897-af50-da278d561648" tabIndex={-1} aria-selected="true"><span className="mdc-list-item__graphic material-icons" aria-hidden="true">star</span>Star</li><li className="mdc-list-item mdc-ripple-upgraded" id="654978f5-2015-44c8-bca8-d0665addabd4" tabIndex={-1}><span className="mdc-list-item__graphic material-icons" aria-hidden="true">send</span>Send</li><li className="mdc-list-item mdc-ripple-upgraded" id="25c471e3-997d-454d-aef4-2af9b96f8d2f" tabIndex={-1}><span className="mdc-list-item__graphic material-icons" aria-hidden="true">drafts</span>Drafts</li></ul></div><div><h3 className="mdc-typography--subtitle1">Trailing Icon</h3><ul className="mdc-list demo-list"><li className="mdc-list-item mdc-ripple-upgraded" tabIndex={0} id="4b35bab9-e6bc-4e63-a7e5-a6edcafe1aaa">Line item<span className="mdc-list-item__meta material-icons" aria-hidden="true">info</span></li><li className="mdc-list-item mdc-ripple-upgraded" id="8c2dd49b-4ea4-4ccd-99fc-eb424f680650" tabIndex={-1}>Line item<span className="mdc-list-item__meta material-icons" aria-hidden="true">info</span></li><li className="mdc-list-item mdc-ripple-upgraded" id="a5928040-7c3f-41f0-9c37-9bf57111f9bc" tabIndex={-1}>Line item<span className="mdc-list-item__meta material-icons" aria-hidden="true">info</span></li></ul></div><div><h3 className="mdc-typography--subtitle1">Two-Line with Leading and Trailing Icon and Divider</h3><ul className="mdc-list demo-list mdc-list--two-line mdc-list--avatar-list"><li className="mdc-list-item mdc-ripple-upgraded" tabIndex={0} id="524163f2-6aa5-4dff-b6f2-60b33f8279f0"><span className="mdc-list-item__graphic material-icons" aria-hidden="true">folder</span><span className="mdc-list-item__text"><span className="mdc-list-item__primary-text">Dog Photos</span><span className="mdc-list-item__secondary-text">9 Jan 2018</span></span><span className="mdc-list-item__meta material-icons" aria-hidden="true">info</span></li><li className="mdc-list-item mdc-ripple-upgraded" id="0e586ac7-7b40-4278-97bd-6d9e4ce97e96" tabIndex={-1}><span className="mdc-list-item__graphic material-icons" aria-hidden="true">folder</span><span className="mdc-list-item__text"><span className="mdc-list-item__primary-text">Cat Photos</span><span className="mdc-list-item__secondary-text">22 Dec 2017</span></span><span className="mdc-list-item__meta material-icons" aria-hidden="true">info</span></li><li className="mdc-list-divider" role="separator"></li><li className="mdc-list-item mdc-ripple-upgraded" id="91c87ee8-4b33-4531-a858-433fbebdedeb" tabIndex={-1}><span className="mdc-list-item__graphic material-icons" aria-hidden="true">folder</span><span className="mdc-list-item__text"><span className="mdc-list-item__primary-text">Potatoes</span><span className="mdc-list-item__secondary-text">30 Noc 2017</span></span><span className="mdc-list-item__meta material-icons" aria-hidden="true">info</span></li><li className="mdc-list-item mdc-ripple-upgraded" id="8802d2aa-12c3-4d1f-87cc-207bf9340a90" tabIndex={-1}><span className="mdc-list-item__graphic material-icons" aria-hidden="true">folder</span><span className="mdc-list-item__text"><span className="mdc-list-item__primary-text">Carrots</span><span className="mdc-list-item__secondary-text">17 Oct 2017</span></span><span className="mdc-list-item__meta material-icons" aria-hidden="true">info</span></li></ul></div><div><h3 className="mdc-typography--subtitle1">List with Trailing Checkbox</h3><ul className="mdc-list demo-list mdc-list--avatar-list"><li className="mdc-list-item mdc-ripple-upgraded" tabIndex={0} id="55c2231b-5b48-4aef-b4fb-8eede8f54c83">Dog Photos<div className="mdc-checkbox mdc-list-item__meta mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" ><input type="checkbox" className="mdc-checkbox__native-control" aria-labelledby="55c2231b-5b48-4aef-b4fb-8eede8f54c83" tabIndex={-1}/><div className="mdc-checkbox__background"><svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path className="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div className="mdc-checkbox__mixedmark"></div></div><div className="mdc-checkbox__ripple"></div></div></li><li className="mdc-list-item mdc-ripple-upgraded" id="34cd9c98-725c-4bb8-b99e-560da5859ff9" tabIndex={-1}>Cat Photos<div className="mdc-checkbox mdc-list-item__meta mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" ><input type="checkbox" className="mdc-checkbox__native-control" aria-labelledby="34cd9c98-725c-4bb8-b99e-560da5859ff9" tabIndex={-1}/><div className="mdc-checkbox__background"><svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path className="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div className="mdc-checkbox__mixedmark"></div></div><div className="mdc-checkbox__ripple"></div></div></li><li className="mdc-list-divider" role="separator"></li><li className="mdc-list-item mdc-ripple-upgraded" id="1c9c3119-4462-486d-9ed0-8517cf63e177" tabIndex={-1}>Potatoes<div className="mdc-checkbox mdc-list-item__meta mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" ><input type="checkbox" className="mdc-checkbox__native-control" aria-labelledby="1c9c3119-4462-486d-9ed0-8517cf63e177" tabIndex={-1}/><div className="mdc-checkbox__background"><svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path className="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div className="mdc-checkbox__mixedmark"></div></div><div className="mdc-checkbox__ripple"></div></div></li><li className="mdc-list-item mdc-ripple-upgraded" id="86a4a35f-80c2-4e54-a9e9-717fa8f7188f" tabIndex={-1}>Carrots<div className="mdc-checkbox mdc-list-item__meta mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" ><input type="checkbox" className="mdc-checkbox__native-control" aria-labelledby="86a4a35f-80c2-4e54-a9e9-717fa8f7188f" tabIndex={-1}/><div className="mdc-checkbox__background"><svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path className="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg><div className="mdc-checkbox__mixedmark"></div></div><div className="mdc-checkbox__ripple"></div></div></li></ul></div><div><h3 className="mdc-typography--subtitle1">List with Trailing Radio Buttons</h3><ul className="mdc-list demo-list mdc-list--avatar-list"><li className="mdc-list-item mdc-ripple-upgraded" tabIndex={0} id="2afa0083-d0ad-4565-b369-7b62fadd5798">Dog Photos<div className="mdc-radio mdc-list-item__meta mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" ><input className="mdc-radio__native-control" type="radio" name="listDemoRadioGroup" aria-labelledby="2afa0083-d0ad-4565-b369-7b62fadd5798" checked={false} tabIndex={-1}/><div className="mdc-radio__background"><div className="mdc-radio__outer-circle"></div><div className="mdc-radio__inner-circle"></div></div><div className="mdc-radio__ripple  "></div></div></li><li className="mdc-list-item mdc-ripple-upgraded" id="69bff3df-8127-479a-9532-d67b6846c627" tabIndex={-1}>Cat Photos<div className="mdc-radio mdc-list-item__meta mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" ><input className="mdc-radio__native-control" type="radio" name="listDemoRadioGroup" aria-labelledby="69bff3df-8127-479a-9532-d67b6846c627" checked={false} tabIndex={-1}/><div className="mdc-radio__background"><div className="mdc-radio__outer-circle"></div><div className="mdc-radio__inner-circle"></div></div><div className="mdc-radio__ripple  "></div></div></li><li className="mdc-list-divider" role="separator"></li><li className="mdc-list-item mdc-ripple-upgraded" id="799f3d95-3427-48d5-bf10-432949984adb" tabIndex={-1}>Potatoes<div className="mdc-radio mdc-list-item__meta mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" ><input className="mdc-radio__native-control" type="radio" name="listDemoRadioGroup" aria-labelledby="799f3d95-3427-48d5-bf10-432949984adb" checked={false} tabIndex={-1}/><div className="mdc-radio__background"><div className="mdc-radio__outer-circle"></div><div className="mdc-radio__inner-circle"></div></div><div className="mdc-radio__ripple  "></div></div></li><li className="mdc-list-item mdc-ripple-upgraded" id="d9278d3e-4452-424b-85be-6271ff994a21" tabIndex={-1}>Carrots<div className="mdc-radio mdc-list-item__meta mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" ><input className="mdc-radio__native-control" type="radio" name="listDemoRadioGroup" aria-labelledby="d9278d3e-4452-424b-85be-6271ff994a21" checked={false} tabIndex={-1}/><div className="mdc-radio__background"><div className="mdc-radio__outer-circle"></div><div className="mdc-radio__inner-circle"></div></div><div className="mdc-radio__ripple  "></div></div></li></ul></div>
      </FieldSet>
      <FieldSet legend="M" className="box-check">
      </FieldSet>
    </FieldSet>

    <FieldSet legend="select">
      <FieldSet legend="G">
        {/*@ts-ignore*/}
        <div className="select-row"><div><h3 className="mdc-typography--subtitle1">Filled</h3><div className="mdc-select"><div className="mdc-select__anchor custom-enhanced-select-width mdc-ripple-upgraded" ><i className="mdc-select__dropdown-icon"></i><div className="mdc-select__selected-text" tabIndex={0} aria-disabled={false} aria-expanded="false"></div><span className="mdc-floating-label">Fruit</span><div className="mdc-line-ripple" ></div></div><div className="mdc-select__menu mdc-menu mdc-menu-surface demo-enhanced-select custom-enhanced-select-width" ><ul className="mdc-list"><li data-value="" disabled={true} aria-selected="false" role="option" className="mdc-list-item" tabIndex={0}></li><li data-value="apple" aria-selected="false" role="option" className="mdc-list-item" tabIndex={-1}>Apple</li><li data-value="orange" aria-selected="false" role="option" className="mdc-list-item" tabIndex={-1}>Orange</li><li data-value="banana" aria-selected="false" role="option" className="mdc-list-item" tabIndex={-1}>Banana</li></ul></div></div></div></div><div className="select-row"><div><h3 className="mdc-typography--subtitle1">Outlined</h3><div className="mdc-select mdc-select--outlined demo-enhanced-select"><div className="mdc-select__anchor custom-enhanced-select-width"><i className="mdc-select__dropdown-icon"></i><div id="demo-selected-text" className="mdc-select__selected-text" tabIndex={0} aria-disabled={false} aria-expanded="false"></div><div className="mdc-notched-outline mdc-notched-outline--upgraded"><div className="mdc-notched-outline__leading"></div><div className="mdc-notched-outline__notch" ><label id="outlined-label" className="mdc-floating-label" >Fruit</label></div><div className="mdc-notched-outline__trailing"></div></div></div><div className="mdc-select__menu mdc-menu mdc-menu-surface demo-enhanced-select custom-enhanced-select-width" ><ul className="mdc-list"><li data-value="" disabled={true} aria-selected="false" role="option" className="mdc-list-item" tabIndex={0}></li><li data-value="apple" aria-selected="false" role="option" className="mdc-list-item" tabIndex={-1}>Apple</li><li data-value="orange" aria-selected="false" role="option" className="mdc-list-item" tabIndex={-1}>Orange</li><li data-value="banana" aria-selected="false" role="option" className="mdc-list-item" tabIndex={-1}>Banana</li></ul></div></div></div></div><div className="select-row"><div><h3 className="mdc-typography--subtitle1">Shaped Filled</h3><div className="mdc-select"><div className="mdc-select__anchor custom-enhanced-select-width mdc-ripple-upgraded" ><i className="mdc-select__dropdown-icon"></i><div className="mdc-select__selected-text" tabIndex={0} aria-disabled={false} aria-expanded="false"></div><span className="mdc-floating-label">Fruit</span><div className="mdc-line-ripple" ></div></div><div className="mdc-select__menu mdc-menu mdc-menu-surface demo-enhanced-select custom-enhanced-select-width" ><ul className="mdc-list"><li data-value="" disabled={true} aria-selected="false" role="option" className="mdc-list-item" tabIndex={0}></li><li data-value="apple" aria-selected="false" role="option" className="mdc-list-item" tabIndex={-1}>Apple</li><li data-value="orange" aria-selected="false" role="option" className="mdc-list-item" tabIndex={-1}>Orange</li><li data-value="banana" aria-selected="false" role="option" className="mdc-list-item" tabIndex={-1}>Banana</li></ul></div></div></div></div><div className="select-row"><div><h3 className="mdc-typography--subtitle1">Shaped Outlined</h3><div className="mdc-select mdc-select--outlined demo-enhanced-select"><div className="mdc-select__anchor custom-enhanced-select-width"><i className="mdc-select__dropdown-icon"></i><div id="demo-selected-text" className="mdc-select__selected-text" tabIndex={0} aria-disabled={false} aria-expanded="false"></div><div className="mdc-notched-outline mdc-notched-outline--upgraded"><div className="mdc-notched-outline__leading"></div><div className="mdc-notched-outline__notch" ><label id="shaped_outlined-label" className="mdc-floating-label" >Fruit</label></div><div className="mdc-notched-outline__trailing"></div></div></div><div className="mdc-select__menu mdc-menu mdc-menu-surface demo-enhanced-select custom-enhanced-select-width" ><ul className="mdc-list"><li data-value="" disabled={true} aria-selected="false" role="option" className="mdc-list-item" tabIndex={0}></li><li data-value="apple" aria-selected="false" role="option" className="mdc-list-item" tabIndex={-1}>Apple</li><li data-value="orange" aria-selected="false" role="option" className="mdc-list-item" tabIndex={-1}>Orange</li><li data-value="banana" aria-selected="false" role="option" className="mdc-list-item" tabIndex={-1}>Banana</li></ul></div></div></div></div>        
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
