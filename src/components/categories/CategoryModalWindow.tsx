import React from 'react';
import CategorySettings from './CategorySettings';

interface CategoryModalWindowProps {
  onModalWindowClose: () => void;
  onCategoryCreate: (title: string) => void;
}

export default function CategoryModalWindow(props: CategoryModalWindowProps) {
  return (
    <div className="categories-modal z-10 absolute w-full h-full left-0 top-0 bg-[#9A9A9A] bg-opacity-40 rounded-3xl">
      <div className="h-full flex justify-center items-center">
        <CategorySettings
          onModalWindowClose={props.onModalWindowClose}
          onCategoryCreate={props.onCategoryCreate}
        />
      </div>
    </div>
  );
}
