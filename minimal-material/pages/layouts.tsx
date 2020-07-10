import Button from "../mwcr/Button";
import ButtonIcon from "../mwcr/ButtonIcon";
import ButtonToggler from "../mwcr/ButtonToggler";
import TabItem from "../mwcr/TabItem";
import ButtonFloat from "../mwcr/ButtonFloat";

export default function Layouts() {
  return <article className="suite_vertical">
    <section>
      <div>
        <Button {...{outlined: true}}>Outlined</Button>
        <Button {...{icon: "favorite", unelevated: true}}>Unelevated </Button>
        <ButtonIcon {...{icon: "favorite"}}/>
        <ButtonToggler {...{icon: "favorite_border", iconOn: "favorite"}}/>
        <TabItem {...{icon: "favorite"}}>Tab item</TabItem>
        <TabItem {...{icon: "favorite", vertical: true, checked: true}}>Vertical</TabItem>
        <ButtonFloat {...{icon: "favorite"}}/>
        <ButtonFloat {...{icon: "favorite", mini: true}}/>
        <ButtonFloat {...{icon: "favorite", extended: true}}>Create</ButtonFloat>
        <ButtonFloat {...{icon: "favorite", extended: true, reverse: true}}>Create</ButtonFloat>
      </div>
    </section>
    <section>
      <div className="box-check">
        <div className="mm_2_tab_item content_favorites"/>
        <div className="mm_2_tab_item_vert content_favorites"/>
        <div className="mm_2_icon_button content_favorites"/>
        <div className="mm_2_fab_icon content_favorites"/>
        <div className="mm_2_fab_min content_favorites"/>
        <div className="mm_2_fab content_favorites"/>
        <div className="mm_2_fab_rev content_favorites"/>
        <div className="mm_2_button content_favorites"/>
      </div>
    </section>
  </article>
}
