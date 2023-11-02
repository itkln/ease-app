import CategoryFilter from './CategoryFilter'
import CategoryDisplay from './CategoryDisplay'
import Button from '../Button'
import { CategoryType } from '../../types/CategoryType'
import { useSignal } from '@preact/signals-react'
import CategoryModalWindow from './CategoryModalWindow'

interface CategoryManagerProps {
    categories: Array<CategoryType>
    onCategoryCreate: (title: string, filter: string) => void
    onCategoryDelete: (id: number) => void
}

export default function CategoryManager(props: CategoryManagerProps) {

    const isOpen = useSignal(false)

    const onModalWindowOpen = () => {
        isOpen.value = true
    }

    const onModalWindowClose = () => {
        isOpen.value = false
    }

    return (
        <div className="overview-page-content__categories relative w-full rounded-3xl bg-white p-[30px]">
          {isOpen.value && (
            <CategoryModalWindow
              onModalWindowClose={onModalWindowClose}
              onCategoryCreate={props.onCategoryCreate}
            />
          )}
          <div className="overview-page-content__categories-container h-full flex flex-col">
            <div className="categories-container__selects flex space-x-5">
              <CategoryFilter />
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

