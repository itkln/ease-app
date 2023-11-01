import { CategoryType } from '../../types/CategoryType';
import Category from './Category';

interface CategoryDisplayProps {
  categories: Array<CategoryType>
  onCategoryDelete: (id: number) => void
}

export default function CategoryDisplay(props: CategoryDisplayProps) {
  return (
    <>
        {
          props.categories.map((category: CategoryType) => {
            return (
              <Category onCategoryDelete={props.onCategoryDelete} category={category} />
            )
          })
        }
    </>
  )
}
