import RecentTransaction, { RecentTransactionProps } from './RecentTransaction'

interface RecentTransactionListProps {
    transactionList: RecentTransactionProps[]
}

export default function RecentTransactionList(props: RecentTransactionListProps) {
    return (
        <>
            {
                props.transactionList.map(transaction => {
                    return (
                        <RecentTransaction title={transaction.title} amount={transaction.amount} category={transaction.category} date={transaction.date} />
                    )
                })
            }
        </>
    )
}
