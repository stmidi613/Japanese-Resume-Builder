import React, {useState, createContext} from 'react';

export interface AppStateType {
    PopupId: number;
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setHidePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultValues = {
    PopupId: Date.now(),
    showPopup: false,
    setShowPopup: () => {},
    setHidePopup: () => {},
}

export const AppContext = createContext(defaultValues);

const AppState: React.FC = ({children}) => {
  const [showPopup, setPopup] = useState<boolean>(false);
  const PopupId: number = Date.now();
  return (
    <AppContext.Provider value={{
        PopupId: PopupId,
        showPopup,
        setShowPopup: () => {setPopup(true)},
        setHidePopup: () => {setPopup(false)},
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState