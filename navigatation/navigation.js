import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from '../AuthContext';
import AppNav from './appNav';

export default function AppNavigator() {
  return (
   <AuthProvider>
    
    <AppNav/>
   </AuthProvider>
  );
}
