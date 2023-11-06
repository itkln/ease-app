import instance from "../utils/axios";
import {TransactionCategoriesResponseType, TransactionResponseType} from "../models/transaction"
import {CreateCategoryRequestType, CreateCategoryResponseType } from "../models/category";
import { OperationsResponseType } from "../models/operations";

export const transactionsAPI = {
    async getTransactions() {
        const res = await instance.get<TransactionResponseType>('transactions');
        return res.data;
    },
    async getTransactionCategories() {
        return await instance.get<TransactionCategoriesResponseType>('categories')
        .then(res => res.data);
    }
}

export const categoriesAPI = {
    async addCategory(category: CreateCategoryRequestType) {
        return instance.post<CreateCategoryResponseType>('category', category)
            .then(res => res.data)
    },
}

export const filtersAPI = {
    async addCategory(category: CreateCategoryRequestType) {
        return instance.post<CreateCategoryResponseType>('category', category)
            .then(res => res.data)
    },
}

export const operationsAPI = {
    async getOperations() {
        return instance.get<OperationsResponseType>('operations')
            .then(res => res.data)
    },
}