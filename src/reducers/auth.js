import actionTypes from "../constants/actionTypes";

const defaultState = {
    token: "",
}

const auth =   (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_LOGIN:
            return {
                ...state,
                token: action.payload,

            }
        default:
            return state;
    }
};

 export default auth; 