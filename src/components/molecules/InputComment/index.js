import React from 'react'
import {View,Text,Image} from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'

const InputComment = (props) => {
  return(
    <View style={{padding:8,paddingLeft:40,borderBottomColor:'rgba(128,128,128,0.1)',borderBottomWidth:2,flex:1,flexDirection:'row',alignItems:'center'}}>
        <Text style={{fontSize:17.5,width:80}}>{props.id}</Text>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <TextInput style={{flex:1}} placeholder="Tulis Komentar disini..."/>
          <TouchableOpacity style={{width:30}}>
            <Text style={{color:'#48dbfb',fontSize:14}}>Kirim</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default InputComment