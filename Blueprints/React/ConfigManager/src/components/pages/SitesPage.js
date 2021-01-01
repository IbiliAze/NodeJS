///////////////////////////////////////////////////////////////////////////////////MODULES
import React from 'react';         
import { connect } from 'react-redux';                                                     
////////////////////////////////////////////////////////////////////////////////COMPONENTS
import SitesList from '../sites/SitesList';                                             
import SitesListFilters from '../sites/SitesListFilters' 
import SitesForm from '../sites/SitesForm';                               
///////////////////////////////////////////////////////////////////////////////////ACTIONS
import { postSite } from '../../actions/sites';
//////////////////////////////////////////////////////////////////////////////////////////




const SitesPage = (props) => (
    <div>
        <SitesForm 
            onSubmit={(site) => {
                props.dispatch(postSite( site ));
            }}
        />
        <br />

        <SitesListFilters />
        <br />
        <SitesList />
    </div>
);


export default connect()(SitesPage);