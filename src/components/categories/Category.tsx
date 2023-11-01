import { AiOutlineClose } from "react-icons/ai";
import GroceryIcon from "../../assets/images/grocery.svg"
import { CategoryType } from "../../types/CategoryType";

interface CategoryProps {
    category: CategoryType
    onCategoryDelete: (id: number) => void;
}

export default function Category(props: CategoryProps) {
    const {id, title, amount} = props.category
    return (
        <>
            <div className="category cursor-pointer font-l border-[1.5px] border-[#f2f2f2] p-[15px] rounded-xl hover:bg-[#f2f2f2] transition ease-in-out duration-200">
                <div className="category__title flex justify-between items-center space-x-2">
                    {/* <span><img src={GroceryIcon} alt="grocery" /></span> */}
                    <h1>{title}</h1>
                    <button onClick={() => props.onCategoryDelete(id)}><AiOutlineClose /></button>
                </div>
                <div className="category__amount text-[20px] font-xl">
                    <h1 className="mt-2">€{amount}</h1>
                </div>
            </div>
        </>
    )
}
