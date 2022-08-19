import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';


export const AppStateContext = React.createContext<any>({});

export const useAppData = () => {
  return useContext(AppStateContext);
};

const AppStateProvider = ({children}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AppStateContext.Provider
      value={{user}}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;