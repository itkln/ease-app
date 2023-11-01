import React from 'react'

interface LabelProps {
    name: string;
}

export default function Label(props: LabelProps) {
  return (
    <div>
        <label className="block text-left mb-[5px] font-s" htmlFor="categories">{props.name}</label>
    </div>
  )
}
