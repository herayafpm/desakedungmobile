import React,{Component} from 'react'
import {View,Text,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ItemCommentOrganism from '../ItemCommentOrganism'


class CardItemInfoTerkini extends Component {
  state = {
    siteUrl: 'http://192.168.137.1/desakedung1/public/assets/uploads/aduan/'
  }
  render(){
    return(
      <View style={{marginBottom:10,backgroundColor:'white',flex:1}}>
        <View style={{padding:7,paddingLeft:20,borderBottomColor:'rgba(128,128,128,0.1)',borderBottomWidth:2}}>
          <Text style={{fontSize:17.5,}}>{this.props.username}</Text>
        </View>
        <View>
          <Image resizeMode='contain' style={{width: '100%', height: 300}} source={{uri: this.state.siteUrl + this.props.file}}/>
          <Text style={{padding:10,textAlign:'center'}}>{this.props.isi_aduan}</Text>
        </View>
        <View style={{padding:7, justifyContent:'flex-end',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'rgba(128,128,128,0.1)'}}>
          <TouchableOpacity style={{marginHorizontal:15}}>
            <Image source={require('../../../assets/icon/home.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:15}}>
            <Image source={require('../../../assets/icon/search.png')}/>
          </TouchableOpacity>
        </View>
        <ItemCommentOrganism komentar={this.props.komentar}/>
      </View>
    )
  }
}

export default CardItemInfoTerkini