import Ledger from './Ledger'
import TransactionForm from './TransactionForm'

interface LedgerManagerProps {
  categoryTitles: Array<string>
  operationNames: Array<string>
  onTransactionCreate?: any;
}

export default function LedgerManager(props: LedgerManagerProps) {
  return (
    <div className="ledger-manager-content p-[30px] w-full bg-white rounded-3xl max-w-[410px]">
      <div className="ledger-manager">
        <div className="ledger-manager-view mb-[30px] max-w-[320px] mx-auto">
          <Ledger />
        </div>
      </div>
      <div className="transaction-content text-center">
        <div className="transaction-controls">
          <p className="transaction-controls-title mb-[20px]">Transactions</p>
          <div className="transaction-controls-actions mb-[30px] bg-[#F3F4F6] p-[5px] rounded-[21px] flex">
            <button className="transaction-controls-add py-3 w-full bg-[#3B7EDD] text-white rounded-[18px]">Add</button>
            <button className="transaction-controls-send py-3 w-full rounded-[18px]">Send</button>
          </div>
        </div>
        <TransactionForm categoryTitles={props.categoryTitles} operationNames={props.operationNames} onTransactionCreate={props.onTransactionCreate} />
      </div>
    </div>
  )
}
