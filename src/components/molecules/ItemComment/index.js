import React,{useEffect,useState} from 'react'
import {View,Text,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ItemComment = (props) => {
  return(
    <View style={{padding:7,paddingLeft:20,borderBottomColor:'rgba(128,128,128,0.1)',borderBottomWidth:2,flex:1,flexDirection:'row'}}>
        <Text style={{fontSize:17.5,width:200}}>{props.id}</Text>
        <Text style={{fontSize:15,color:'rgba(0,0,0,0.6)',flex:1}}>{props.comment}</Text>
    </View>
  )
}
export default ItemComment