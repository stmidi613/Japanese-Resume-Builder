import React, {useState, createContext} from 'react';

export interface AppStateType {
    // idnum: number,
    showPopup: boolean;
    // setIdNum: React.Dispatch<React.SetStateAction<number>>;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setHidePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultValues = {
    // idnum: 0,
    showPopup: false,
    // setIdNum: () => {},
    setShowPopup: () => {},
    setHidePopup: () => {},
}

export const AppContext = createContext(defaultValues);

const AppState: React.FC = ({children}) => {
  const [showPopup, setPopup] = useState<boolean>(false);
  // const [idnum, setIdNum] = useState<number>(0);

  return (
    <AppContext.Provider value={{
        // idnum,
        showPopup,
        // setIdNum: () => setIdNum,
        setShowPopup: () => {setPopup(true)},
        setHidePopup: () => {setPopup(false)},
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState