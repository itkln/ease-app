import React, { useState } from 'react'
import Select from './Select'
import Label from './Label'
import Input from './Input'
import Button from './Button'
import { useSignal } from '@preact/signals-react'

interface TransactionFormProps {
  categoryTitles: Array<string>
  onTransactionCreate: (categoryTitle: string, amount: string) => void
}

export default function TransactionForm(props: TransactionFormProps) {
  const amount = useSignal('')
  const category = useSignal('')

  const handleCategory = (newValue: string) => {
    category.value = newValue
  }

  const handleCreateTransaction = () => {
      props.onTransactionCreate(category.value, amount.value)
      amount.value = ''
  }

  return (
    <div className='overview-page-content__transaction'>
      <div className="transaction-select__add mb-[20px]">
      <Label name={"Category"} />
        <Select id={"category"} name={"category"} labelName={"Add to"} options={props.categoryTitles} title='Select category' handleCategory={handleCategory}/>
      </div>
      <div className="transaction-form__info mb-[20px]">
        <div className="info-details__amount w-full mr-2 mb-[20px]">
          <Label name={"Amount"} />
          <Input value={amount.value} id={"amount"} name={"amount"} type={"text"} onChange={e => amount.value = e.target.value}/>
        </div>
        <div className="info-details__operation w-full mb-[20px]">
        <Label name={"Operation"} />
          <Select id={"operation"} name={"operation"} labelName={"Operation"} options={["Income", "Outcome"]} title='Select operation'   />
        </div>
        <div className="transaction-form__info-comment ">
          <Label name={"Comment"} />
          <Input id={"comment"} name={"comment"} type={"text"} />
        </div>
      </div>
      <div className="overview-page-content__transaction__button">
        <Button onClick={handleCreateTransaction}>Create transaction</Button>
      </div>
    </div>
  )
}
