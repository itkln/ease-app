import React from 'react';
import CategorySettings from './CategorySettings';
import { FilterType } from '../../types/FilterType';

interface CategoryModalWindowProps {
  onModalWindowClose: () => void;
  onCategoryCreate: (title: string, filter: string) => void;
  filters: FilterType[]
}

export default function CategoryModalWindow(props: CategoryModalWindowProps) {
  return (
    <div className="categories-modal z-10 absolute w-full h-full left-0 top-0 bg-[#9A9A9A] bg-opacity-40 rounded-3xl">
      <div className="h-full flex">
        <CategorySettings
          filters={props.filters}
          onModalWindowClose={props.onModalWindowClose}
          onCategoryCreate={props.onCategoryCreate}
        />
      </div>
    </div>
  );
}
