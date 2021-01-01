///////////////////////////////////////////////////////////////////////////////////MODULES
import React from 'react';                                                             
import ReactDOM from 'react-dom';                                                     
import { Provider } from 'react-redux';                             
////////////////////////////////////////////////////////////////////////////////APP ROUTER    
import AppRouter from './routers/AppRouter'; 
///////////////////////////////////////////////////////////////////////////////REDUX STORE
import configureStore from './store/configureStore';
/////////////////////////////////////////////////////////////////////////////REDUX ACTIONS
import { getSites } from './actions/sites';
import { getNodes } from './actions/nodes';
///////////////////////////////////////////////////////////////////////////////////////CSS
import 'normalize.css/normalize.css';                                                   
import './styles/styles.scss';                                                          
//////////////////////////////////////////////////////////////////////////////////////////



const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);



///////////////////////////////////////////////////////////////////
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(getSites()).then(() => {
    store.dispatch(getNodes()).then(() => {
        ReactDOM.render(jsx, document.getElementById('app'));
    });   
});

