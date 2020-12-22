import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({ //descructuring & default value (empty object)
    type: 'INCREMENT',
    incrementBy: incrementBy
});  


const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});


const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});


const resetCount = () => ({
    type: 'RESET'
});



const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: state.count = 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default: 
            return state;
    }
}


const store = createStore(countReducer);
 


const unsub = store.subscribe(() => {
    console.log(store.getState())
});



store.dispatch(incrementCount( { incrementBy: 44 } ));


store.dispatch(decrementCount( { decrementBy: 21 } ));


store.dispatch(resetCount());


store.dispatch(setCount( { count: 66 } ));