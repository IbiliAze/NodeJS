import React from 'react';
import { Link } from 'react-router-dom';


const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
        <p>check these out</p>
        <Link to="/portfolio/1">Item One</Link>
        <Link to="/portfolio/2">Item Düo</Link>
    </div>
)


export default PortfolioPage;