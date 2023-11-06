import React, { useState } from 'react';
import Select from './Select';
import Label from './Label';
import Input from './Input';
import Button from './Button';

interface TransactionFormProps {
  categoryTitles: Array<string>;
  operationNames: Array<string>;
  onTransactionCreate: (categoryTitle: string, amount: string) => void;
}

export default function TransactionForm(props: TransactionFormProps) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleCategory = (newValue: string) => {
    setCategory(newValue);
  };

  const handleCreateTransaction = () => {
    props.onTransactionCreate(category, amount);
    setAmount('');
  };

  return (
    <div className="overview-page-content__transaction">
      <div className="transaction-select__add mb-[20px]">
        <Label name={"Category"} />
        <Select id={"category"} name={"category"} labelName={"Add to"} options={props.categoryTitles} title='Select category' handleCategory={handleCategory}/>
      </div>
      <div className="transaction-form__info mb-[20px]">
        <div className="info-details__amount w-full mr-2 mb-[20px]">
          <Label name={"Amount"} />
          <Input value={amount} id={"amount"} name={"amount"} type={"text"} onChange={e => setAmount(e.target.value)} />
        </div>
        <div className="info-details__operation w-full mb-[20px]">
          <Label name={"Operation"} />
          <Select id={"operation"} name={"operation"} labelName={"Operation"} options={props.operationNames} title='Select operation'   />
        </div>
        <div className="transaction-form__info-comment">
          <Label name={"Comment"} />
          <Input id={"comment"} name={"comment"} type={"text"} />
        </div>
      </div>
      <div className="overview-page-content__transaction__button">
        <Button onClick={handleCreateTransaction}>Create transaction</Button>
      </div>
    </div>
  );
}
