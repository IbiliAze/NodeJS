//////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';                                                              //
import {                                                                                //
    BrowserRouter,                                                                      //
    Route,                                                                              // MODULES
    Switch                                                                              //
} from 'react-router-dom';                                                              //
//////////////////////////////////////////////////////////////////////////////////////////
import NodeConfigDashboarchPage from '../components/pages/NodeConfigDashboarchPage';    //
import LoginPage from '../components/pages/LoginPage';                                  //
import NodesPage from '../components/pages/NodesPage';                                  // PAGES
import SitesPage  from '../components/pages/SitesPage';                                 //
import NotFoundPage from '../components/pages/NotFoundPage';                            //    
//////////////////////////////////////////////////////////////////////////////////////////
import Header from '../components/Header';                                              // HEADER
//////////////////////////////////////////////////////////////////////////////////////////
import SideBar from '../components/SideBar'                                             // SIDEBAR
//////////////////////////////////////////////////////////////////////////////////////////





//////////////////////
export default () => (
    <BrowserRouter>
        <div>
            <Header />
            <SideBar />
            <Switch>
                <Route exact path="/" component={NodeConfigDashboarchPage} />
                <Route exact path="/nodes" component={NodesPage} />
                <Route exact path="/nodes/:id" component={NodesPage} />
                <Route exact path="/sites" component={SitesPage} />
                <Route exact path="/sites/:id" component={SitesPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);