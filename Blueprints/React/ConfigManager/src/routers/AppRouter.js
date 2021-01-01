///////////////////////////////////////////////////////////////////////////////////MODULES
import React from 'react';                                                             
import {                                                                              
    BrowserRouter,                                                                      
    Route,                                                                           
    Switch                                                                            
} from 'react-router-dom';                                                              
/////////////////////////////////////////////////////////////////////////////////////PAGES
import NodeConfigDashboarchPage from '../components/pages/NodeConfigDashboarchPage';   
import LoginPage from '../components/pages/LoginPage';                                 
import NodesPage from '../components/pages/NodesPage'; 
import NodesEditPage from '../components/pages/NodesEditPage';                               
import SitesPage  from '../components/pages/SitesPage';        
import SitesEditPage from '../components/pages/SitesEditPage';    
import ApiDocsPage from '../components/pages/ApiDocsPage';        
import FaQPage from '../components/pages/FaQPage';           
import NotFoundPage from '../components/pages/NotFoundPage';                           
////////////////////////////////////////////////////////////////////////////////////HEADER
import Header from '../components/Header';                                              
///////////////////////////////////////////////////////////////////////////////////SIDEBAR
import SideBar from '../components/SideBar'                                             
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
                <Route exact path="/nodes/:id" component={NodesEditPage} />
                <Route exact path="/sites" component={SitesPage} />
                <Route exact path="/sites/:id" component={SitesEditPage} />
                <Route exact path="/docs" component={ApiDocsPage} />
                <Route exact path="/faq" component={FaQPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);