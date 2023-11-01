import Container from "../components/Container";
import LedgerManager from "../components/LedgerManager";
import CategoryManager from "../components/categories/CategoryManager";
import { useState } from "react";
import useCategory, { Category } from "../hooks/useCategory";
import { categories, onCategoryCreate, onCategoryDelete } from "../signals/signalCategory";

export const categoryList: Category[] = [
    { id: 1, title: "Groceries", amount: 421.50 },
    { id: 2, title: "Cafe & Restaurants", amount: 150.24 },
    { id: 3, title: "Travel", amount: 1520.50 },
    { id: 4, title: "Birthday", amount: 200.00 },
]

export default function Overview() {
    const categoryTitles = categories.value.map(category => category.title);

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

    return (
        <Container>
            <div className="overview-content h-screen text-[#1A242D]">
                <div className="overview-content__blocks flex justify-between space-x-8 font-m">
                    <LedgerManager categories={categoryTitles}/>
                    <CategoryManager 
                    categories={categories.value}
                    onCategoryCreate={onCategoryCreate}
                    onCategoryDelete={onCategoryDelete}
                    />
                    {/* <RecentTransactionsManager /> */}
                </div>
            </div>
        </Container>
    )
}