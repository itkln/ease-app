import { RecentTransactionProps } from './RecentTransaction'
import RecentTransactionHeader from './RecentTransactionHeader'
import RecentTransactionList from './RecentTransactionsList'

const transactionList: RecentTransactionProps[] = [
  {title: "Alza.sk", amount: 315.90, category: "Electronics", date: new Date('2023-09-15T15:30:00')},
  {title: "LIDL", amount: 56.40, category: "Grocery", date: new Date('2023-04-23T14:32:50')},
  {title: "Alza.sk", amount: 42.90, category: "Electronics", date: new Date('2021-02-25T12:24:01')},
  {title: "McDonalds", amount: 42.90, category: "Cafe & Restaurants", date: new Date('2021-02-25T12:24:01')},
]

export default function RecentTransactionsManager() {
  return (
    <>
      <div className="overview-content__transactions w-2/5 rounded-3xl font-l bg-white p-[30px]">
        <RecentTransactionHeader />
        <div className="overview-content__transactions-list my-[30px]">
          <RecentTransactionList transactionList={transactionList} />
        </div>
      </div>
    </>
  )
}
