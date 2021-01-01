///////////////////////////////////////////////////////////////////////////////////MODULES
import React from 'react';                                                              
import { NavLink } from 'react-router-dom';                                            
//////////////////////////////////////////////////////////////////////////////////////////



//////////////////////
export default () => (
    <div>
        <h1>NodeConfig</h1>
        <NavLink to="/nodes" activeClassName="is-active" exact={true}>Nodes</NavLink>
        <NavLink to="/sites" activeClassName="is-active" exact={true}>Sites</NavLink>
        <NavLink to="/login" activeClassName="is-active" exact={true}>Login</NavLink>
    </div>
);