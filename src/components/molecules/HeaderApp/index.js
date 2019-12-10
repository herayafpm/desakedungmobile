import React from 'react'
import {View,Image,Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HeaderApp = (props) => {
  return(
    <View style={{height:180,position:'relative'}}>
      <Image source={props.img} style={{height:'100%',width:'100%'}}/>
      <View style={{position:'absolute',top:5,right:5,padding:10,backgroundColor:'white',borderRadius:25}}>
        <TouchableOpacity onPress={props.onPress}>
          <Image source={require('../../../assets/icon/user.png')}/>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent:'center',height:50,position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(128,128,128,0.8)',paddingLeft:16}}>
        <Text style={{ fontSize: 22, color: 'white'}}>{props.title}</Text>
      </View>
    </View>
  )
}

export default HeaderApp