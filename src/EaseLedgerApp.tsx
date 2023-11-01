import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PageContent from './components/PageContent';
import Overview from './page/Overview';
import Transactions from './page/Transactions';
import Account from './page/Account';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<PageContent />}>
            <Route path="overview" element={<Overview />}></Route>
            <Route path="payments" element={<Transactions />}></Route>
            <Route path="account" element={<Account />}></Route>
        </Route>
    )
)

export default function EaseLedgerApp() {
  return (
    <RouterProvider router={router} />
  )
}
