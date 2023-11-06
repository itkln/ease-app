import Container from "../components/Container";
import LedgerManager from "../components/LedgerManager";
import CategoryManager from "../components/categories/CategoryManager";
import { CategoryType } from "../types/CategoryType";
import { operationsAPI, transactionsAPI } from "../api/services/api";
import { useEffect, useState } from "react";
import { OperationType } from "../types/OperationType";

export default function Overview() {
    const [categories, setCategories] = useState<CategoryType[]>([])
    const [operations, setOperations] = useState<OperationType[]>([])
    const categoryTitles = categories.map(category => category.title);
    const operationNames = operations.map(operation => operation.name);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await transactionsAPI.getTransactionCategories();
            const responseCategories: CategoryType[] = response.categories.map(category => ({
                id: category.id,
                title: category.category_name,
                amount: category.amount,
            }));
            setCategories(responseCategories)
        };

        const fetchOperations = async () => {
            const response = await operationsAPI.getOperations();
            const responseOperations: OperationType[] = response.operations.map(operation => ({
                id: operation.id,
                name: operation.operation_name,
            }));
            setOperations(responseOperations)
        };
        fetchOperations()
        fetchCategories()
    }, []);

    function onCategoryCreate(title: string, filter: string) {

        // TODO: add category to DB and get response with ID
        const newCategory: CategoryType = {
            id: 5,
            title: title,
            amount: 0,
        }
    
        setCategories([...categories, newCategory])
    }
    
    function onCategoryDelete(id: number) {
        // TODO: delete category in DB
        const newCategories = categories.filter(c => c.id !== id)
        setCategories(newCategories)
    }

    return (
        <Container>
            <div className="overview-content h-screen text-[#1A242D]">
                <div className="overview-content__blocks flex justify-between space-x-8 font-m">
                    <LedgerManager categoryTitles={categoryTitles} operationNames={operationNames}/>
                    <CategoryManager
                        categories={categories}
                        onCategoryCreate={onCategoryCreate}
                        onCategoryDelete={onCategoryDelete}
                    />
                    {/* <RecentTransactionsManager /> */}
                </div>
            </div>
        </Container>
    )
}