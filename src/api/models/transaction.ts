export type TransactionResponseType = {
    id: number
    category: string
    operation: number
    amount: number
    createdAt: string
}

export type TransactionCategoryResponseType = {
    id: number,
    title: string,
    amount: number,
}

export type TransactionCategoriesResponseType = {
    categories: TransactionCategoryResponseType[]
}