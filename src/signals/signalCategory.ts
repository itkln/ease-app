import { signal } from "@preact/signals-react";
import { CategoryType } from "../types/CategoryType";

function initCategories(): CategoryType[] {
    // TODO: get categories from DB

    const categories: CategoryType[] = [
        { id: 1, title: "Groceries", amount: 421.50 },
        { id: 2, title: "Cafe & Restaurants", amount: 150.24 },
        { id: 3, title: "Travel", amount: 1520.50 },
        { id: 4, title: "Birthday", amount: 200.00 },
    ]

    return categories
}

export const categories = signal(initCategories())

export function onCategoryCreate(title: string) {
    // TODO: add category to DB and get response with ID
    const newCategory: CategoryType = {
        id: 5,
        title: title,
        amount: 0,
    }

    categories.value = [...categories.value, newCategory]
}

export function onCategoryDelete(id: number) {
    // TODO: delete category in DB
    const newCategories = categories.value.filter(c => c.id !== id)
    categories.value = newCategories
}