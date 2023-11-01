import instance from "../utils/axios";
import {TransactionCategoriesResponseType, TransactionResponseType} from "../models/transaction"
import {CreateCategoryRequestType, CreateCategoryResponseType } from "../models/category";

export const transactionsAPI = {
    async getTransactions() {
        return instance.get<TransactionResponseType>('transactions')
            .then(res => res.data)
    },
    async getTransactionCategories() {
        return instance.get<TransactionCategoriesResponseType>('transactions/categories')
            .then(res => res.data)
    }
}

export const categoriesAPI = {
    async addCategory(category: CreateCategoryRequestType) {
        return instance.post<CreateCategoryResponseType>('category', category)
            .then(res => res.data)
    },
}