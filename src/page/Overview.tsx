import Container from "../components/Container";
import LedgerManager from "../components/LedgerManager";
import CategoryManager from "../components/categories/CategoryManager";
import { categories, onCategoryCreate, onCategoryDelete } from "../signals/signalCategory";

export default function Overview() {
    const categoryTitles = categories.value.map(category => category.title);

    return (
        <Container>
            <div className="overview-content h-screen text-[#1A242D]">
                <div className="overview-content__blocks flex justify-between space-x-8 font-m">
                    <LedgerManager categories={categoryTitles} />
                    <CategoryManager
                        categories={categories.value}
                        onCategoryCreate={onCategoryCreate}
                        onCategoryDelete={onCategoryDelete}
                    />
                    {/* <RecentTransactionsManager /> */}
                </div>
            </div>
        </Container>
    )
}