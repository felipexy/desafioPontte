import { createStore } from 'redux';

const INITIAL_STATE = {id: 2, valid: false};

function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'CHANGE_ID':
            return ({
                id: action.id,
                valid: state.valid
            });
        case 'CHANGE_VALID':
            return ({
                id: state.id,
                valid: action.valid
            })    
        default: 
            return state;
    }
}

const store = createStore(reducer);

export default store;