import React from 'react';
import {createContext} from 'react';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
import {useEffect} from 'react';
import {registerApi} from './config';

export default function AuthProvider({children}) {
  
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    
    setUserToken('iskjdlhafskj');

   
    AsyncStorage.setItem('userToken', 'iskjdlhafskj');
  };
  const logOut = () => {
    
    AsyncStorage.removeItem('userToken');
    setUserToken(null);
    
  };
  const isLoggedin = async () => {
    try {
      
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
    } catch (e) {
      console.log(`isloggedin is error')${e}`);
    }
  };
  useEffect(() => {
    isLoggedin();
  }, []);

  return (
    <AuthContext.Provider value={{login, logOut,  userToken}}>
      {children}
    </AuthContext.Provider>
  );
}
