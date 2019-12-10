import React from 'react'
import {View,Text,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'

const GreenHeader = (props) => {
  return(
    <View style={{position:'relative',height:50,flexDirection:'row',backgroundColor:'#55efc4',paddingHorizontal:10}}>
      <View style={{position:'absolute',left:5,justifyContent:'center',height:50}}>
        <TouchableOpacity style={{width:50,height:50}} onPress={() => props.navigation.goBack()}>
          <Image source={require('../../../assets/icon/left-arrow.png')} style={{width:50,height:50}}/>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Text style={{ fontSize: 22, color: 'white',fontWeight:'bold'}}>{props.title}</Text>
      </View>
    </View>
  )
}

export default withNavigation (GreenHeader)