import GroceryIcon from "../assets/images/grocery.svg"

export interface RecentTransactionProps {
    title: string;
    amount: number;
    category: string;
    date: Date;
}

export default function RecentTransaction(props: RecentTransactionProps) {
    return (
        <>
            <div className="recent-transaction w-full flex justify-between space-x-2">
                <div className="recent-transaction__icon flex p-[10px] bg-[#F3F4F6] rounded-lg">
                    <img className="w-5" src={GroceryIcon} alt="grocery" />
                </div>
                <div className="recent-transaction__details w-full">
                    <div className="recent-transaction__details__transaction-info flex justify-between text-sm font-xl">
                        <div className="transaction-info__title">
                            {props.title}
                        </div>
                        <div className="transaction-info__amount">
                            -€{props.amount}
                        </div>
                    </div>
                    <div className="recent-transaction__details__payment-info flex justify-between text-[#AFAFAF] text-[12px] font-m mt-[5px]">
                        <div className="payment-info__category">
                            {props.category}
                        </div>
                        <div className="payment-info__date">
                            {props.date.toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-[15px]" />
        </>
    )
}
