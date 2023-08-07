import React from 'react'
import { View,TextInput,Text,TouchableOpacity } from 'react-native'

export default function InputField(label,inputType,keyboardType) {
  return (<View>
    
        <View
          style={{
            fontSize: 20,
            flexDirection: 'row',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}>
            {inputType === 'password' ? (
<TextInput secureTextEntry={keyboardType} 
placeholder={label}/>
          ):(<TextInput secureTextEntry={keyboardType} 
            placeholder={label}/>)}
          
        </View>
  </View>
    
  )
}
