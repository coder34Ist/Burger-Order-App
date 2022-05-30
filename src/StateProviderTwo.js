import React, {createContext,useContext,useReducer} from "react";
export const StateContextTwo = createContext();

export const StateProviderTwo=({reducerr,newState,children})=>(
   
    
    <StateContextTwo.Provider value={useReducer(reducerr,newState)}>
        {children}
     </StateContextTwo.Provider>
    
);

export const useStateValueTwo=()=>useContext(StateContextTwo);