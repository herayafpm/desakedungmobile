import React from 'react'
import {View,TouchableOpacity,Image} from 'react-native'

const BtnHomeFeature = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.img}/>
      </TouchableOpacity>
    </View>
  )
}

export default BtnHomeFeature