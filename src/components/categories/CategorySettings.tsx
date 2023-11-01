import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSignal } from '@preact/signals-react';
import Input from '../Input';
import Label from '../Label';
import Button from '../Button';

interface CategorySettingsProps {
  onModalWindowClose: () => void;
  onCategoryCreate: (title: string) => void;
}

export default function CategorySettings(props: CategorySettingsProps) {
  const title = useSignal('');

  return (
    <div className="category-settings bg-white rounded-xl">
      <div className="category-settings__container p-4">
        <div className="category-settings__title text-[20px] font-l flex items-center justify-between">
          <h1>New category</h1>
          <button onClick={props.onModalWindowClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="category-settings__content flex justify-between my-4 space-x-4">
          <div className="category-settings__content-data flex-col space-y-5 w-full">
            <div className="content-data__name">
              <Label name="Title" />
              <Input
                value={title.value}
                onChange={(e) => (title.value = e.currentTarget.value)}
                type="text"
                name="name"
                id="name"
              />
            </div>
          </div>
        </div>
        <div className="category-settings__btn">
          <Button
            onClick={() => {
              props.onCategoryCreate(title.value);
              props.onModalWindowClose();
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
