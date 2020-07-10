import { FieldsetHTMLAttributes, PropsWithChildren, ReactNode, memo } from "react";

type Props = PropsWithChildren<FieldsetHTMLAttributes<HTMLFieldSetElement> & {legend?: ReactNode}> 

const FieldSet = memo(FieldSetRender)

export default FieldSet
export {FieldSetRender}

function FieldSetRender({children, legend, ...props}: Props) {
  return <fieldset {...props}>
    {legend && <legend>{legend}</legend>}
    {children}
  </fieldset>
}
