import { FieldsetHTMLAttributes, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<FieldsetHTMLAttributes<HTMLFieldSetElement> & {legend?: ReactNode}> 

export {
  FieldSet,
  Figure,
  A
}

function FieldSet({children, legend, ...props}: Props) {
  return <fieldset {...props}>
    {legend && <legend>{legend}</legend>}
    {children}
  </fieldset>
}


function Figure({
  caption="", children, "data-cy": cy
}: PropsWithChildren<Partial<{
  "caption": string
  "data-cy": string
}>>
) {
  return <figure data-cy={cy}>{
    children
  }
    <figcaption>{caption}</figcaption>
  </figure>
}

function A({content}: {content: string}) {
  const id = content.toLowerCase().replace(/[^a-z0-9]/g, '_')
  return <a {...{
    id,
    href: `#${id}`
  }}>{content}</a>
}