import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../Screens/home';

import {createDrawerNavigator} from '@react-navigation/drawer';

import AboutUs from '../Screens/AboutUs';

import CustomDrawer from '../Commponents/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function AppStack() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen  name="AboutUs" component={AboutUs} />
      

    </Drawer.Navigator>
  );
}
