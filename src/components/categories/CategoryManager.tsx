import React, { useState } from 'react'
import CategoryFilter from './CategoryFilter'
import { CategoryProps } from './Category'
import CategoryExplorer from './CategoryExplorer'
import Button from '../Button'
import CategoryCreator from './CategoryModal'
import { CategoryType } from '../../types/CategoryType'

interface CategoryManagerProps {
    categoryList: Array<CategoryType>
    addCategory: Function
    deleteCategory: Function
}

export default function CategoryManager(props: CategoryManagerProps) {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className="overview-page-content__categories relative w-full rounded-3xl bg-white p-[30px]">
                {isOpen && (
                    <CategoryCreator onClose={closeModal} addCategory={props.addCategory} />
                )}
                <div className="overview-page-content__categories-container h-full flex flex-col">
                    <div className="categories-container__selects flex space-x-5">
                        <CategoryFilter />
                    </div>
                    <div className="overview-page-content__categories-viewer my-5 grid grid-cols-3 gap-5 overflow-auto">
                        <CategoryExplorer categories={props.categoryList} deleteCategory={props.deleteCategory}/>
                    </div>
                    <div className="overview-page-content__categories-add mt-auto">
                        <Button onClick={openModal}>Add category</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

