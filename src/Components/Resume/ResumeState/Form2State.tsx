import React, { createContext, Reducer, useReducer } from 'react';
import { stateType } from './ResumeState';

//Form2
export const initialState = {
    educInfo: [{
      educId: "",
      schoolName: "",
    }]
  }

// export const initialValues = typeof initialState;
// export type stateType = {
//     educInfo: string[];
//     educId: string;
//     schoolName: string; 
// }

export type actionType = {
    type:
        | "ADD_EDUC",
    payload: typeof initialState;
}

  export const Form2Context = createContext(initialState);

export const Form2Reducer: Reducer<typeof initialState, actionType> = (state, action) => {
    switch(action.type){
        case "ADD_EDUC":
            return {
                educInfo: [...state.educInfo, action.payload]
            };
        default:
            return {
                state
            };
    }
}

const Form2State: React.FC = ({children}: any) => {
    const [state, dispatch] = useReducer(Form2Reducer, initialState)
  return (
    <Form2Context.Provider value={[state, dispatch]}>
        {children}
    </Form2Context.Provider>
  )
}

export default Form2State