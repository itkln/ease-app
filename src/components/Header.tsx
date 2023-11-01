import Container from './Container'
import { NavLink, Outlet } from "react-router-dom";
import easeWallet from  '../assets/images/easeLedger.svg'

export default function Header() {
    return (
        <div>
            <header className="bg-[#1A242D]">
                <Container>
                    <div className="cardview-header py-2 flex justify-between items-center bg text-white">
                        <div className="cardview-header__logo">
                            <a href="/"><img src={easeWallet} alt="easeWallet" /></a>
                        </div>
                        <nav className="cardview-header__nav group text-xs">
                            <ul className="flex list-none">
                                <li className="nav__link inline-block mx-5 hover:text-[#9B9C9F] ease-in-out duration-200">
                                    <NavLink to="/overview">Overview</NavLink>
                                </li>
                                <li className="nav__link inline-block mx-5 hover:text-[#9B9C9F] ease-in-out duration-200">
                                    <NavLink to="/payments">Payments</NavLink>
                                </li>
                                <li className="nav__link inline-block mx-5 hover:text-[#9B9C9F] ease-in-out duration-200">
                                    <NavLink to="/account">Account</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="carview-header__exit text-xs hover:text-[#9B9C9F] ease-in-out duration-200">
                            <a href="/">Log out</a>
                        </div>
                    </div>
                </Container>
            </header>
        </div>
    )
}
