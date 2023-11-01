import React from 'react'

export default function RecentTransactionHeader() {
    return (
        <>
            <div className="recent-transaction-header flex justify-between text-[16px]">
                <h1 className="recent-transaction-header__title">Recent transactions</h1>
                <a className="recent-transaction-header__link text-[#3B7EDD]" href="/payments">See all</a>
            </div>
        </>
    )
}
