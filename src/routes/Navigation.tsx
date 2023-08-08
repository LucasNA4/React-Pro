import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

import logo from '../logo.svg'
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";


export const Navigation = () => {

    const activeLink = ( isActive: boolean ) => isActive ? 'nav-active' : '';

    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    
                    <ul>
                        <li>
                            <NavLink to="/shopping" className={ ({ isActive }) => activeLink(isActive) }>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({ isActive }) => activeLink(isActive) }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({ isActive }) => activeLink(isActive) }>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={ <h1>About Page</h1> }/>
                    <Route path="/users" element={ <h1>Users Page</h1> }/>
                    <Route path="/shopping" element={ <ShoppingPage /> }/>

                    <Route path="/*" element={ <Navigate to="/shopping" replace/> }/>
                </Routes>

            </div>
        </BrowserRouter>
    )
}
