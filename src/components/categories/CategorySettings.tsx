import React, {useState} from 'react'
import Input from '../Input'
import Label from '../Label'
import Button from '../Button'
import {AiOutlineClose} from 'react-icons/ai'

export default function CategorySettings(props: any) {

  const[newTitle, setNewTitle] = useState('')
  const[newAmount, setNewAmount] = useState('0')

  return (
    <>
      <div className="category-settings bg-white rounded-xl">
        <div className="category-settings__container p-4">
          <div className="category-settings__title text-[20px] font-l flex items-center justify-between">
            <h1>New category</h1>
            <button onClick={props.onClose}><AiOutlineClose /></button>
          </div>
          <div className="category-settings__content flex justify-between my-4 space-x-4">
            <div className="category-settings__content-data flex-col space-y-5 w-full">
              <div className="content-data__name">
                <Label name="Title" />
                <Input value={newTitle} onChange={e => setNewTitle(e.currentTarget.value)} type="text" name="name" id="name" />
              </div>
            </div>
          </div>
          <div className="category-settings__btn">
            <Button onClick={ () => {
              props.addCategory(newTitle, parseFloat(newAmount))
              props.onClose()
            }}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
