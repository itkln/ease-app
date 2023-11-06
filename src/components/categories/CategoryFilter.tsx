import Label from "../Label";
import Select from "../Select";

interface CategoryFilterProps {
    filterNames: string[]
}

const months: string[] = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(0, i);
    return date.toLocaleString(undefined, { month: "long" });
});

export default function CategoryFilter(props: CategoryFilterProps) {
    return (
        <>
            <div className="category-filter w-full flex space-x-5">
                <div className="category-filter__payments w-3/5">
                    <Label name={"Filter"} />
                    <Select id={"filter"} name={"filter"} labelName={"Filter"} options={props.filterNames} title="Select filter" />
                </div>
                <div className="category-filter__month w-2/5">
                    <Label name={"Month"} />
                    <Select id={"months"} name={"months"} labelName={"Month"} options={months} title="Select month" />
                </div>
                <div className="category-filter__year w-2/5">
                    <Label name={"Year"} />
                    <Select id={"years"} name={"years"} labelName={"Year"} options={["2023"]} title="Select year" />
                </div>
            </div>
        </>
    )
}
