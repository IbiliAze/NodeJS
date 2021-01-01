///////////////////////////////////////////////////////////////////////////////////MODULES
import React from 'react';                                                              
import { NavLink } from 'react-router-dom';                                            
//////////////////////////////////////////////////////////////////////////////////////////



//////////////////////
export default () => (
    <header>
        Current Header
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/docs" activeClassName="is-active" exact={true}>Docs</NavLink>
        <NavLink to="/faq" activeClassName="is-active" exact={true}>FaQ</NavLink>
    </header>
);