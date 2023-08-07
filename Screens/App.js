/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from '../navigatation/navigation';
import {PaperProvider} from 'react-native-paper';
function App() {
  return(
  <PaperProvider>
    <AppNavigator />
  </PaperProvider>)
}

export default App;
