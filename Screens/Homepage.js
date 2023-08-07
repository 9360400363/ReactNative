import React from 'react'

import { View,SafeAreaView,Text,TouchableOpacity, } from 'react-native';

export const Homepage = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315'}}>
          
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{backgroundColor: 'purple', padding: 20, maxWidth: 'auto'}}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Let's Begain</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
