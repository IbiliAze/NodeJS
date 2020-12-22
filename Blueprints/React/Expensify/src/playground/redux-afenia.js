import { createStore, combineReducers } from 'redux';
import uuid  from 'uuid';



// ADD_DEVICE
const addDevice = ( { 
    name = '',
    model = '',
    brand = '',
    numberOfModules = 0,
    createdAt = 0
} = {} ) => ({
    type: 'ADD_DEVICE',
    device: {
        id: uuid(),
        name,
        model,
        brand,
        numberOfModules,
        createdAt
    }
});

// REMOVE_DEVICE
const removeDevice = (device) => ({
    type: 'REMOVE_DEVICE',
    device
});

// EDIT_DEVICE
const editDevice = (id, changes) => ({
    type: 'EDIT_DEVICE',
    id,
    changes
});

// SET_NAME_FILTER
const setNameFilter = (name = '') => ({
    type: 'SET_NAME_FILTER',
    name
});

// SORT_BY_NUMBER_OF_MODULES
const sortByNumberOfModules = () => ({
    type: 'SORT_BY_NUMBER_OF_MODULES'
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_NAME
const sortByName = () => ({
    type: 'SORT_BY_NAME'
});

// SORT_BY_MODEL
const sortByModel = () => ({
    type: 'SORT_BY_MODEL'
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});


// REDUCERS
// Devices Reducer
const devicesReducerDefaultState = [];
const devicesReducer = (state = devicesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_DEVICE':
            return [
                ...state,
                action.device
            ];
        case 'REMOVE_DEVICE':
            return state.filter((device) => action.device.id !== device.id);
        case 'EDIT_DEVICE':
            return state.map((device) => {
                if (device.id === action.id) {
                    return {
                        ...device,
                        ...action.changes
                    };
                } else {
                    return device;
                };
            });
        default:
            return state;
    };
};


// Filters Reducer
const filtersReducerDefaultState = {
    name: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_NAME_FILTER':
            return {
                ...state,
                name: action.name
            };
        case 'SORT_BY_NUMBER_OF_MODULES':
            return {
                ...state,
                sortBy: 'numberOfModules'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_NAME':
            return {
                ...state,
                sortBy: 'name'
            };
        case 'SORT_BY_MODEL':
            return {
                ...state,
                sortBy: 'model'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default: 
            return state;
    };
};



// Store
const store = createStore(
    combineReducers({
        devices: devicesReducer,
        filters: filtersReducer
    })
);


// FilteredDevices
const getFilteredDevices = (devices, { name, sortBy, startDate, endDate }) => {
    return devices.filter((device) => {
        const nameMatch = name === '' || device.name.toLowerCase().includes(name.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || device.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || device.createdAt <= endDate;

        return nameMatch && startDateMatch && endDateMatch;
    });
};


// Subscription
store.subscribe(() => {
    const state = store.getState();
    const filteredDevices = getFilteredDevices(state.devices, state.filters);
    console.log(filteredDevices);
});



// Dispatching
const L3Switch = store.dispatch(addDevice( {name: 'L3 Switch', numberOfModules: 5, createdAt: 1000} ));
const L3Switch2 = store.dispatch(addDevice( {name: 'L3 Switch 2', numberOfModules: 2, createdAt: -1000} ));
const L3Switch22 = store.dispatch(addDevice( {name: 'L3 Switch 22', numberOfModules: 2, createdAt: -1000} ));
const L3Switch3 = store.dispatch(addDevice( {name: 'L3 Switch 3', numberOfModules: 10, createdAt: 2000} ));
const L3Switch4 = store.dispatch(addDevice( {name: 'L3 Switch 4', numberOfModules: 0, createdAt: -2000} ));
//                   store.dispatch(removeDevice( { id: L3Switch2.device.id } ));
//                   store.dispatch(editDevice( L3Switch.device.id, { model: 'c2900' } ));
                  store.dispatch(setNameFilter('L3 Switch'));
//                   store.dispatch(sortByNumberOfModules());
//                   store.dispatch(sortByDate());
//                   store.dispatch(sortByName());
//                   store.dispatch(sortByModel());
                //   store.dispatch(setStartDate(125));
                //   store.dispatch(setStartDate());
                //   store.dispatch(setEndDate(1250));
                //   store.dispatch(setEndDate());


// DEMO STATE
const demoState = {
    devices: [{
        id: uuid(),
        name: 'CoreSwitchh',
        brand: 'Cisco',
        model: 'c2800',
        numberOfModules: 4,
        createdAt: 0
    }],
    filter: {
        name: 'dist',
        sortBy: 'numberOfModules', // date, name, model, number of modules
        startDate: undefined,
        endDate: undefined
    }
};