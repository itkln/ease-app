import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import CategoryDisplay from './CategoryDisplay';
import Button from '../Button';
import { CategoryType } from '../../types/CategoryType';
import CategoryModalWindow from './CategoryModalWindow';
import { FilterType } from '../../types/FilterType';

const initFilters: FilterType[] = [
  { id: 1, name: "Savings"},
  { id: 2, name: "Expences"},
  { id: 3, name: "Monthly payments"}
]


interface CategoryManagerProps {
    categories: Array<CategoryType>;
    onCategoryCreate: (title: string, filter: string) => void;
    onCategoryDelete: (id: number) => void;
}

export default function CategoryManager(props: CategoryManagerProps) {
    const [filters, setFilters] = useState(initFilters)
    const [isOpen, setIsOpen] = useState(false);
    const filterNames = filters.map(filter => filter.name)

    const onModalWindowOpen = () => {
        setIsOpen(true);
    }

    const onModalWindowClose = () => {
        setIsOpen(false);
    }

    return (
        <div className="overview-page-content__categories relative w-full rounded-3xl bg-white p-[30px]">
            {isOpen && (
                <CategoryModalWindow
                    filters={filters}
                    onModalWindowClose={onModalWindowClose}
                    onCategoryCreate={props.onCategoryCreate}
                />
            )}
            <div className="overview-page-content__categories-container h-full flex flex-col">
                <div className="categories-container__selects flex space-x-5">
                    <CategoryFilter filterNames={filterNames} />
                </div>
                <div className="overview-page-content__categories-viewer my-5 grid grid-cols-3 gap-5 overflow-auto">
                    <CategoryDisplay categories={props.categories} onCategoryDelete={props.onCategoryDelete} />
                </div>
                <div className="overview-page-content__categories-add mt-auto">
                    <Button onClick={onModalWindowOpen}>Add category</Button>
                </div>
            </div>
        </div>
    );
}
