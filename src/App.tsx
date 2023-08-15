import React from 'react';
import Container from './components/Container';
import easeLogo from './assets/images/easeLogo.svg'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Overview from './page/Overview';
import Payments from './page/Payments';
import Account from './page/Account';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route path="overview" element={<Overview />}></Route>
            <Route path="payments" element={<Payments />}></Route>
            <Route path="account" element={<Account />}></Route>
        </Route>
    )
)

function App() {
  return (
    <div className="App bg-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
