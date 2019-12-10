import React, {Component} from 'react'
import {View,Text,SafeAreaView,FlatList} from 'react-native'
import {connect} from 'react-redux'
import GreenHeader from '../../../components/molecules/GreenHeader'
import { ScrollView } from 'react-native-gesture-handler'
import CardItemInfoTerkini from '../../organisms/CardItemInfoTerkini'
import { getAduanAPI } from '../../../config/redux/action'


class InfoTerkni extends Component {
  state={
    DATA : [],
    komentar: [
      {commentId: 1,id: '3304110701000001', komentar:'hehe'},
      {commentId: 2,id: '3304110701000002', komentar:'aow'},
      {commentId: 3,id: '3304110701000001', komentar:'waw'},
    ]
  }
  componentDidMount(){
    this._initialize()
  }
  async _initialize(){
    const res = await this.props.getAduanAPI().catch(err => err)
    if(res){
      try{
        if(res.data !== undefined){
          this.setState({
            DATA: res.data
          })
        }
      }
      catch(err){
        alert(err)
      }
    }
  }
  render() {
    return(
      <View style={{flex:1,backgroundColor:'rgba(128,128,128,0.1)'}}>
        <GreenHeader title='Info Terkini' />
        <SafeAreaView style={{flex:1}}>
          <FlatList data={this.state.DATA} renderItem={({item}) =>  <CardItemInfoTerkini
          username={item.data.nik} isi_aduan={item.data.isi_aduan} file={item.file[0].file} komentar={this.state.komentar}
          />
        } 
          keyExtractor={item => item.id}/>
        </SafeAreaView>
      </View>
    )
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
  getAduanAPI: (data) => dispatch(getAduanAPI(data)),
})


export default connect(reduxState,reduxDispatch)(InfoTerkni)