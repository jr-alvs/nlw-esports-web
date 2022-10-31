import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  title: string;
}

export function Label({ title, ...props }: LabelProps) {
  return (
    <label {...props} className='font-semibold'>
      {title}
    </label>
  )
}