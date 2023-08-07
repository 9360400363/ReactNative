import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {  Card, } from 'react-native-paper';


export const  Home= () =>{
 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: ''}}>
      <ScrollView style={{padding: 20}}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text style={{fontSize: 16, fontFamily: 'Robeto-Medium'}}>
            {' '}
            Hello User{' '}
          </Text>
        </View>
      <View>
      <Card >
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </Card>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
 export const Product =()=>{
  return(
    <SafeAreaView>
      <ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  )
 }
