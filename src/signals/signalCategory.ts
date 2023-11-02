import { signal } from "@preact/signals-react";
import { CategoryType } from "../types/CategoryType";
import { categoriesAPI, transactionsAPI } from "../api/services/api";

function initCategories(): CategoryType[] {
    // const response = transactionsAPI.getTransactionCategories()

    const categories: CategoryType[] = [
        { id: 1, title: "Groceries", amount: 421.50 },
        { id: 2, title: "Cafe & Restaurants", amount: 150.24 },
        { id: 3, title: "Travel", amount: 1520.50 },
        { id: 4, title: "Birthday", amount: 200.00 },
    ]

    return categories
}

export const categories = signal(initCategories())

export function onCategoryCreate(title: string, filter: string) {

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

// const onTransactionCreate = (selectedCategory: string, amount: string) => {
//     // Parse the amount as a number
//     const amountValue = parseFloat(amount);

//     if (!isNaN(amountValue)) {
//         const updatedCategories = categories
//         .map(category => {
//             if (category.title === selectedCategory) {
//                 const newAmount = category.amount + amountValue; // Use the parsed amount
//                 return { ...category, amount: newAmount };
//             }
//             return category;
//         });

//         setCategories(updatedCategories);
//     }
// }