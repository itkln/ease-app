import { useState } from "react";

export type Category = {
    id: number,
    title: string,
    amount: number
}

export default function useCategory(initCategories: Category[]) {
    const [categories, setCategories] = useState<Category[]>(initCategories);

    async function onCategoryCreate(title: string) {
        // const response = await categoriesAPI.addCategory(category)

        const newCategory: Category = {
            id: 10,
            title: title,
            amount: 0,
        }

        setCategories([...categories, newCategory]);
    }

    function onCategoryDelete(id: number) {
        const newCategories = categories.filter((c) => c.id !== id);
        setCategories(newCategories);
    }

    return { categories, onCategoryCreate, onCategoryDelete };
}