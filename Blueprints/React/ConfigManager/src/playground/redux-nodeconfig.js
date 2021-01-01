//////////////////////////////////////////////////////////////////////////////////////////
import { createStore, combineReducers, applyMiddleware } from 'redux';                  //
import { composeWithDevTools } from 'redux-devtools-extension'                          // MODULES
//////////////////////////////////////////////////////////////////////////////////////////
import thunk from 'redux-thunk'                                                         // 
import axios from 'axios';                                                              // MODULES FOR REQUESTS
//////////////////////////////////////////////////////////////////////////////////////////
import httpRequestAPI from '../utils/httpRequestAPI';                                   // HTTP REQUESTS
//////////////////////////////////////////////////////////////////////////////////////////




///// GET /////
const getSitesRequest = () => ({
    type: 'GET_SITES_REQUEST'
});

const getSitesSuccess = sites => ({
    type: 'GET_SITES_SUCCESS',
    sites
});

const getSitesFailure = errorMessage => ({
    type: 'GET_SITES_FAILURE',
    errorMessage
});

const getSites = (endpoint) => ((dispatch) => {
    dispatch(getSitesRequest) // Will set loading to true
    axios.get(endpoint === undefined ? `http://localhost:5000/api/site` : `http://localhost:5000/api/site${endpoint}`)
        .then(response => {
            const sites = response.data;
            dispatch(getSitesSuccess(sites))
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(getSitesFailure(errorMessage));
        });
});



///// POST /////
const postSiteRequest = () => ({
    type: 'POST_SITE_REQUEST'
});

const postSiteSuccess = sites => ({
    type: 'POST_SITE_SUCCESS',
    sites
});

const postSiteFailure = (errorMessage) => ({
    type: 'POST_SITE_FAILURE',
    errorMessage
});

const postSite = (
    {
        description = '',
        type = 'HQ',
        department = 'IT',
        siteName
    }
) => ((dispatch) => {
    dispatch(postSiteRequest)
    axios({
        method: 'post',
        url: `http://localhost:5000/api/site`,
        data: {
            description,
            type,
            department,
            siteName
        }
    })
        .then(response => {
            console.log(response.data);
            axios.get(`http://localhost:5000/api/site`)
                .then(response => {
                    const message = response.data;
                    dispatch(postSiteSuccess(message));
                })
                .catch(error => {
                    const errorMessage = error.message;
                    dispatch(postSiteFailure(errorMessage));
                });
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(postSiteFailure(errorMessage));
        });
});




///// PUT //////
const putSiteRequest = () => ({
    type: 'PUT_SITE_REQUEST'
});

const putSiteSuccess = sites => ({
    type: 'PUT_SITE_SUCCESS',
    sites
});

const putSiteFailure = (errorMessage) => ({
    type: 'PUT_SITE_FAILURE',
    errorMessage
});

const putSite = (siteId, changes) => ((dispatch) => {
    dispatch(putSiteRequest)
    axios({
        method: 'put',
        url: `http://localhost:5000/api/site/${siteId}`,
        data: {
            ...changes
        }
    })
        .then(response => {
            console.log(response.data);
            axios.get(`http://localhost:5000/api/site`)
                .then(response => {
                    const message = response.data;
                    dispatch(putSiteSuccess(message));
                })
                .catch(error => {
                    const errorMessage = error.message;
                    dispatch(putSiteFailure(errorMessage));
                });
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(putSiteFailure(errorMessage));
        });
});




///// DELETE /////
const deleteSiteRequest = () => ({
    type: 'DELETE_SITE_REQUEST'
});

const deleteSiteSuccess = sites => ({
    type: 'DELETE_SITE_SUCCESS',
    sites
});

const deleteSiteFailure = (errorMessage) => ({
    type: 'DELETE_SITE_FAILURE',
    errorMessage
});

const deleteSite = (siteId) => ((dispatch) => {
    dispatch(deleteSiteRequest)
    axios({
        method: 'delete',
        url: `http://localhost:5000/api/site/${siteId}`
    })
        .then(response => {
            console.log(response.data);
            axios.get(`http://localhost:5000/api/site`)
                .then(response => {
                    const message = response.data;
                    dispatch(deleteSiteSuccess(message));
                })
                .catch(error => {
                    const errorMessage = error.message;
                    dispatch(deleteSiteFailure(errorMessage));
                });
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(deleteSiteFailure(errorMessage));
        });
});


///// FILTERS /////
// SET_TEXT_FILTER
const setNameFilter = (filterName = '') => ({
    type: 'SET_NAME_FILTER',
    filterName
});


// SORT_BY_DATE_ASCENDING
const sortByDateAscending = () => ({
    type: 'SORT_BY_DATE_ASCENDING'
});


// SORT_BY_DATE_DESCENDING
const sortByDateDescending = () => ({
    type: 'SORT_BY_DATE_DESCENDING'
});


// SORT_BY_UPDATED_AT_ASCENDING
const sortByUpdatedAtAscending = () => ({
    type: 'SORT_BY_UPDATED_AT_ASCENDING'
});


// SORT_BY_UPDATED_AT_DESCENDING
const sortByUpdatedAtDescending = () => ({
    type: 'SORT_BY_UPDATED_AT_DESCENDING'
});




// Sites Default State
const sitesDefaultState = [];
// Sites Reducer
const sitesReducer = (state = sitesDefaultState, action) => {
    switch (action.type) {
        ///////// GET ///////////
        case 'GET_SITES_REQUEST':
            return [
                ...state
            ]
        case 'GET_SITES_SUCCESS':
            return [
                ...state,
                ...action.sites
            ]
        case 'GET_SITES_FAILURE':
            return action.errorMessage
        //////////////////////////////



        ///////// POST //////////
        case 'POST_SITE_REQUEST':
            return [
                ...state
            ]
        case 'POST_SITE_SUCCESS':
            return [
                ...state,
                ...action.sites
            ]
        case 'POST_SITE_FAILURE':
            return action.errorMessage
        //////////////////////////////
        


        ////////// PUT /////////
        case 'PUT_SITE_REQUEST':
            return [
                ...state
            ]
        case 'PUT_SITE_SUCCESS':
            return [
                ...state,
                ...action.sites
            ]
        case 'PUT_SITE_FAILURE':
            return action.errorMessage



        ///////// DELETE //////////
        case 'DELETE_SITE_REQUEST':
            return [
                ...state
            ]
        case 'DELETE_SITE_SUCCESS':
            return [
                ...state,
                ...action.sites
            ]
        case 'DELETE_SITE_FAILURE':
            return action.errorMessage


        ////////
        default:
            return state
    };
};


// Filters Default State
const filtersReducerDefaultState = {
    name: '',
    sortBy: 'date_ascending'
}
// Filters reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_NAME_FILTER':
            return {
                ...state,
                name: action.filterName
            };
        case 'SORT_BY_DATE_ASCENDING':
            return {
                ...state,
                sortBy: 'date_ascending'
            };
        case 'SORT_BY_DATE_DESCENDING':
            return {
                ...state,
                sortBy: 'date_descending'
            };
        case 'SORT_BY_UPDATED_AT_ASCENDING':
            return {
                ...state,
                sortBy: 'updated_at_ascending'
            };
        case 'SORT_BY_UPDATED_AT_DESCENDING':
            return {
                ...state,
                sortBy: 'updated_at_descending'
            };
        default:
            return state
    };
};



// Logging
const getVisibleSites = (sites, { name, sortBy }) => {
    return sites.filter((site) => {
        const nameMatch = site.siteName.toLowerCase().includes(name.toLowerCase());

        return nameMatch
    }).sort((a, b) => {
        if (sortBy === 'date_ascending') { // EPOCH TIME COMPARISON
            return new Date(a.createdAt.toString()).getTime() < new Date(b.createdAt.toString()).getTime() ? 1 : -1;
        } else if (sortBy === 'date_descending') {
            return new Date(a.createdAt.toString()).getTime() < new Date(b.createdAt.toString()).getTime() ? -1 : 1;
        } else if (sortBy === 'updated_at_ascending') {
            return new Date(a.updatedAt.toString()).getTime() < new Date(b.updatedAt.toString()).getTime() ? 1 : -1;
        } else if (sortBy === 'updated_at_descending') {
            return new Date(a.updatedAt.toString()).getTime() < new Date(b.updatedAt.toString()).getTime() ? -1 : 1;
        };
    });
};


const store = createStore(
    combineReducers({
        sites: sitesReducer,
        filters: filtersReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);


store.subscribe(() => {
    const state = store.getState();
    const visibleSites = getVisibleSites(state.sites, state.filters);
    console.log(visibleSites);
});


store.dispatch( getSites () );
// store.dispatch( getSites ('/5fe4b9b1a05bc637848de451') );
// store.dispatch( postSite ( { siteName: 'LONDON4' } ) );
// store.dispatch( putSite('5fe765f2bea4bf3570a46768', { siteName: 'Londonc4' }) );
// store.dispatch( deleteSite( "5fe74a1c41006345c44da0fa" ) );
// store.dispatch( setNameFilter( '' ) );
store.dispatch( sortByDateDescending() );
// store.dispatch( sortByUpdatedAtDescending() );



console.log(store.getState())
