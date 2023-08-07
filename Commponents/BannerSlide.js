import React from 'react'
import { View ,Image} from 'react-native'



export default function BannnerSlide({data}) {
  return (
    <View>
        <Image source={data.image} style={{height:300,width:150, borderRadius:10}}/>
    </View>
  )
}
