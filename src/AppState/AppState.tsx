import React, {useState, createContext} from 'react';

export interface AppStateType {
    step: number;
    showPopup: boolean;
    setStep: React.Dispatch<React.SetStateAction<boolean>>;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setHidePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultValues = {
    showPopup: false,
    step: 1,
    setStep: () => {},
    setBackStep: () => {},
    setShowPopup: () => {},
    setHidePopup: () => {},
}

export const AppContext = createContext(defaultValues);

const AppState: React.FC = ({children}) => {
  const [showPopup, setPopup] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  return (
    <AppContext.Provider value={{
        step,
        showPopup,
        setStep: () => {setStep(step+1)},
        setBackStep: () => {setStep(step-1)},
        setShowPopup: () => {setPopup(true)},
        setHidePopup: () => {setPopup(false)},
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState