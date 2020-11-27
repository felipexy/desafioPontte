import { createStore } from 'redux';

const INITIAL_STATE = 2;

function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'CHANGE_ID':
            return ({
                id: action.id,
            });
        default: 
            return ({
                id: state,
            });
    }
}

const store = createStore(reducer);

export default store;