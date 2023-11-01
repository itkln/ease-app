export type TransactionResponseType = {
    id: number
    category: string
    operation: number
    amount: number
    createdAt: string
}

export type TransactionCategoriesResponseType = {
    id: number,
    title: string,
    amount: number,
}