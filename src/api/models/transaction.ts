export type TransactionResponseType = {
    id: number
    category: string
    operation: number
    amount: number
    createdAt: string
}

export type TransactionCategoryResponseType = {
    id: number,
    category_name: string,
    amount: number,
    createdAt: string,
}

export type TransactionCategoriesResponseType = {
    categories: TransactionCategoryResponseType[]
}