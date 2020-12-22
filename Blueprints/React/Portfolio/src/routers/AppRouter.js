import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    NavLink
} from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import PortfolioPage from '../components/Portfolio';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact" component={ContactPage} />
                <Route exact path="/portfolio" component={PortfolioPage} />
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;