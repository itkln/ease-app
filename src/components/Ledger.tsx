import VisaSvg from "../assets/images/visa.svg"

interface ILedger {
    balance: number;
    paymentNetwork: unknown;
    cardNumber: string;
    cardName: string
}

interface ILedgerProps {
    props: ILedger;
}

export default function Ledger() {
    return (
      <div className="ledger rounded-[21px] cursor-pointer hover:opacity-60 transition duration-200 bg-gradient-to-t from-[#0B0F13] to-[#2F353D] text-left font-popRegular">
        <div className="ledger__top p-[25px] flex justify-between items-center">
          <div className="ledger__top-info">
            <div className="ledger__top-info__title text-[#6C6D71]">
              <h1>CURRENT BALANCE</h1>
            </div>
            <div className="ledger__top-info__value mt-[5px] text-white text-xl font-l">
              <h1>€12,340.00</h1>
            </div>
          </div>
          <div className="ledger__top-payment-network">
            <img src={VisaSvg} alt="payment-network" />
          </div>
        </div>
        <hr className="ledger__separator border-[#292D32]" />
        <div className="ledger__bottom">
          <div className="ledger__bottom-info p-[25px] flex justify-between">
            <div className="ledger__bottom-info__content">
              <div className="ledger__bottom-info__title text-[#6C6D71]">
                <h1>NUMBER</h1>
              </div>
              <div className="ledger__bottom-info__value mt-[5px] text-white text-xs">
                <h1>4414 4444 4123 1231</h1>
              </div>
            </div>
            <div className="ledger__bottom-info__number">
              <div className="ledger__bottom-info__title text-[#6C6D71]">
                <h1>NAME</h1>
              </div>
              <div className="ledger__bottom-info__value mt-[5px] text-white text-xs">
                <h1>Travelling ledger</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  