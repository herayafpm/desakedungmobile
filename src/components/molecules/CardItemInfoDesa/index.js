import React from 'react'
import {View,Text,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CardItemInfoDesa = (props) => {
  return(
    <View style={{marginBottom:10,backgroundColor:'white',flex:1}}>
      <View style={{padding:7,borderBottomColor:'rgba(128,128,128,0.1)',borderBottomWidth:2}}>
        <Text style={{fontSize:17.5,color:'#00b894',fontWeight:'bold'}}>{props.title}</Text>
      </View>
      <View style={{padding:7}}>
        {
        (props.img !== '')?
        <Image style={{width: '100%',height:400}} source={{uri: props.img}}/>:
        <Text style={{fontSize:15,color:'rgba(0,0,0,0.5)'}}>{props.text}</Text>
        }
      </View>
    </View>
  )
}

export default CardItemInfoDesa