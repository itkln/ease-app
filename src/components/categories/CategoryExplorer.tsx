import Category, { CategoryProps } from './Category';

interface CategoryViewerProps {
  categories: CategoryProps[]
}

export default function CategoryExplorer(props: any) {
  return (
    <>
        {
          props.categories.map((category: { id: string; title: string; amount: number; }) => {
            return (
              <Category deleteCategory={props.deleteCategory} id={category.id} title={category.title} amount={category.amount} />
            )
          })
        }
    </>
  )
}
