export type OperationResponseType = {
    id: number,
    operation_name: string,
}

export type OperationsResponseType = {
    operations: OperationResponseType[]
}