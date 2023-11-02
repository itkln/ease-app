import React, { ChangeEventHandler } from 'react'

interface InputProps {
  id: string;
  name: string;
  type: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  userStyles?: string;
  checked?: boolean;
}

export default function Input(props: InputProps) {

  const textStyles = "w-full px-5 py-3 rounded-[12px] border-[1.5px] border-[#EDEEF1] bg-white outline-none focus:border-[#3B7EDD] transition-all ease-in-out duration-500";
  const checkboxStyles = "w-4 h-4 text-blue-600 bg-red";
  const allStyles = `${textStyles} ${props.userStyles}`

  return (
    <div>
      {props.type === "checkbox" ? (
          <input checked={props.checked} value={props.value} onChange={props.onChange} className={checkboxStyles} type={props.type} name={props.name} id={props.id} />
        ) : (
          <input checked={props.checked} value={props.value} onChange={props.onChange} className={allStyles} type={props.type} name={props.name} id={props.id} />
        )
      }
    </div>
  )
}
