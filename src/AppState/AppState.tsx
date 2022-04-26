import React, {useState, createContext} from 'react';

export interface AppStateType {
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setHidePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultValues = {
    showPopup: false,
    setShowPopup: () => {},
    setHidePopup: () => {},
}

export const AppContext = createContext(defaultValues);

const AppState: React.FC = ({children}) => {
  const [showPopup, setPopup] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{
        showPopup,
        setShowPopup: () => {setPopup(true)},
        setHidePopup: () => {setPopup(false)},
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState