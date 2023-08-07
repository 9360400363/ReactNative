import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStack from './appStack';
import AuthStack from './authStack';
import {useContext} from 'react';

import {ActivityIndicator} from 'react-native-paper';
import {View} from 'react-native';
import {AuthContext} from '../AuthContext';
export default function AppNav() {
  const {isLoading, userToken} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
