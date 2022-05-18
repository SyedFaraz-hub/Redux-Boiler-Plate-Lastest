import {ADD_CAKES} from "./CakeTypes"

const initialState = {
    numberOfCake: 0
}

const cakeReducer = (state = initialState, action) =>{
switch (action.type) {
    case ADD_CAKES: return {
        ...state,
        numberOfCake: state.numberOfCake + 1
    }
        
        

    default: return state
        
}
}

export default cakeReducer