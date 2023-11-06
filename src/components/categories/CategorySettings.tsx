import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../Input';
import Label from '../Label';
import Button from '../Button';
import { FilterType } from '../../types/FilterType';

const filterName = "Filter";
const titleName = "Title";

interface CategorySettingsProps {
  onModalWindowClose: () => void;
  onCategoryCreate: (title: string, filter: string) => void;
  filters: FilterType[]
}

export default function CategorySettings(props: CategorySettingsProps) {
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState('');
  const [isValidate, setIsValidate] = useState(true);
  const alertMessage = 'Please fill out the required fields.';

  const validateInput = () => {
    setIsValidate(title !== '' && filter !== '');
  };

  return (
    <div className="category-settings bg-white rounded-xl w-[350px]">
      <div className="category-settings__container p-4">
        <div className="category-settings__title text-[20px] font-l flex items-center justify-between">
          <h1>New category</h1>
          <button onClick={props.onModalWindowClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="category-settings__content flex justify-between my-4 space-x-4">
          <div className="category-settings__content-data flex-col space-y-5 w-full">
            {!isValidate && (
              <div className="content-data__error-message p-3 bg-red-200 rounded-md text-red-500">
                {alertMessage}
              </div>
            )}
            <div className="content-data__title">
              <Label name={titleName} />
              <Input
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
                type="text"
                name="title"
                id="title"
              />
            </div>
            <div className="content-data__filter">
              <Label name={filterName} />
              {props.filters.map((value: FilterType, id: number) => (
                <div key={id} className='flex gap-2'>
                  <Input
                    value={value.name}
                    checked={filter === value.name}
                    onChange={(e) => setFilter(e.currentTarget.value)}
                    type="checkbox"
                    name={value.name}
                    id="name"
                  />
                  <Label name={value.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="category-settings__btn">
          <Button
            onClick={() => {
              validateInput();
              if (isValidate) {
                props.onCategoryCreate(title, filter);
                props.onModalWindowClose();
              }
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
