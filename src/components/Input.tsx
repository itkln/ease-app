import React, {ChangeEventHandler} from 'react'

interface InputProps {
  id: string;
  name: string;
  type: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  userStyles?: string;
}

export default function Input(props: InputProps) {

  const inputStyles = "w-full px-5 py-3 rounded-[12px] border-[1.5px] border-[#EDEEF1] bg-white outline-none focus:border-[#3B7EDD] transition-all ease-in-out duration-500";
  const allStyles = `${inputStyles} ${props.userStyles}`

  return (
    <div>
      <input value={props.value} onChange={props.onChange} className={allStyles} type={props.type} name={props.name} id={props.id} />
    </div>
  )
}
