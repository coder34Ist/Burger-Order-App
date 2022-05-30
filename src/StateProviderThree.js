import React, {createContext,useContext,useReducer} from "react";
export const StateContextThree = createContext();

export const StateProviderThree=({reducerThree,thirdState,children})=>(
   
    
    <StateContextThree.Provider value={useReducer(reducerThree,thirdState)}>
        {children}
            </StateContextThree.Provider>
    
);

export const useStateValueThree=()=>useContext(StateContextThree);