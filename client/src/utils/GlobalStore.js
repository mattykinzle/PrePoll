import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

// This is a PURE function that takes in an action and creates the next state
// whenever a new action is "dispatched", the GlobalStore will update and the whole application will re-render.
const reducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

// Setup the provider component for our apps store
const StoreProvider = () => {
    // What the react app view model starts as
    const initialState = {}
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Provider value={[state, dispatch]} />
}

// Create a custom hook for using our GlobalStore so the components don't have to hand implement theme
const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };