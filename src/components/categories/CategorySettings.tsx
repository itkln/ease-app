import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSignal } from '@preact/signals-react';
import Input from '../Input';
import Label from '../Label';
import Button from '../Button';
import { filters } from '../../signals/signalFilter';
import { FilterType } from '../../types/FilterType';

const filterName = "Filter";
const titleName = "Title";

interface CategorySettingsProps {
  onModalWindowClose: () => void;
  onCategoryCreate: (title: string, filter: string) => void;
}

export default function CategorySettings(props: CategorySettingsProps) {
  const title = useSignal('');
  const filter = useSignal('');
  const isValidate = useSignal(true);
  const alertMessage = 'Please fill out the required fields.';

  const validateInput = () => {
    isValidate.value = title.value !== '' && filter.value !== '';
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
            {!isValidate.value && (
              <div className="content-data__error-message p-3 bg-red-200 rounded-md text-red-500">
                {alertMessage}
              </div>
            )}
            <div className="content-data__title">
              <Label name={titleName} />
              <Input
                value={title.value}
                onChange={(e) => (title.value = e.currentTarget.value)}
                type="text"
                name="title"
                id="title"
              />
            </div>
            <div className="content-data__filter">
              <Label name={filterName} />
              {filters.value.map((value: FilterType, id: number) => (
                <div key={id} className='flex gap-2'>
                  <Input
                    value={value.name}
                    checked={filter.value === value.name}
                    onChange={(e) => (filter.value = e.currentTarget.value)}
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
              if (isValidate.value) {
                props.onCategoryCreate(title.value, filter.value);
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
