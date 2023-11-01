import React, { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="py-3 w-full text-white rounded-[12px] bg-[#1A242D]" onClick={props.onClick}>{props.children}</button>
  )
}
