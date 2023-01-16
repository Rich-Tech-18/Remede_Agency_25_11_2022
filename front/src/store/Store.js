// import React from "react";
import { createStore } from "redux";
// import { useDispatch } from "react-redux";
import { getItem } from "../services/LocalStorage";

const token = getItem('tokenUser');

// const Auth = React.createContext({
//     isAuthenticated : false,
//     setIsAuthentificated: value => {}
// });

// export default Auth;

const initialState = {
    isAuthenticated: false,
    editForm: false,
    fisrtName: ''
};

export const authenticated = () => ({type: "authenticated"});
export const onload = () => ({type: "onload"});
export const editFormClick = () => ({type: "onEdit"});
export const nameState = (name) => ({
    type: "name",
    payload: {firstName: name}
});



function reducer(state, action){
    if(action.type === "authenticated"){
        return{
            ...state,
            isAuthenticated: !state.isAuthenticated
        };
        
    };
    if(action.type === "onload"){
        if(token === null){
            return state
        }else{
            return {
                ...state,
                isAuthenticated: true
                }
        }
        }
    if(action.type === "onEdit"){
        return{
            ...state,
            editForm: !state.editForm
        }
    }
    if(action.type === "name"){
        const first = action.payload.firstName;
        return{
            ...state,
            firstName: first
    }
    }
    return state;
    
}


export const store = createStore(reducer, initialState);
