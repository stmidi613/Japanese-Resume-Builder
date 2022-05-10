import React, { createContext, Reducer, useReducer } from 'react';
// import { stateType } from './ResumeState';

//Form2
export const initialState = {
    educInfo: {
      educId: "",
      schoolName: "",
    },
    setEducInfo: (e: React.ChangeEvent<HTMLInputElement>) => {},
  }

//   type stateType = {
//     educInfo: {
//         educId: string;
//         schoolName: string;
//     }[];
// }

export type stateType = typeof initialState;

export type actionType = {
    type:
        | "ADD_EDUC",
    payload: stateType;
}

  export const Form2Context = createContext(initialState);

export const Form2Reducer: Reducer<stateType, actionType> = (state, action) => {
    switch(action.type){
        case "ADD_EDUC":
            return {
                educInfo: [state.educInfo, action.payload.educInfo]
            };
        default:
            return {
                state
            };
    }
}

const Form2State: React.FC<React.ReactNode> = ({children}: any) => {
    const [state, dispatch] = useReducer(Form2Reducer, initialState)
  return (
    <Form2Context.Provider value={
      state
    }>
        {children}
    </Form2Context.Provider>
  )
}

export default Form2State