import React,{Component} from 'react'
import {View,SafeAreaView,FlatList} from 'react-native'

import {connect} from 'react-redux'
import ItemComment from '../../../components/molecules/ItemComment'
import InputComment from '../../../components/molecules/InputComment'

import { getUserAPI} from '../../../config/redux/action'

class ItemCommentOrganism extends Component{
  state = {
    comments: this.props.komentar,
  }
  componentDidMount() {
    this._getUserAPI()
  }
  _getUserAPI() {
    this.props.komentar.map(async (item) => {
      const res = await this.props.getUserAPI({nik: item.id}).catch(err => err)
      if(res){
        if(res.status){
          this.setState({
            comments: {
              ...item,
              name: res.data.name
            }
          })
        }
      }
    })
  }
 render(){
   return (
     <View>
       <SafeAreaView style={{flex:1}}>
        <FlatList data={this.state.comments} renderItem={({item}) => 
        <ItemComment id={item.id} comment={item.komentar}/>
        } 
          keyExtractor={item => item.commentId}/>
        </SafeAreaView>
        <InputComment id='Heraya'/>
      </View>
   )
 }
}

const reduxDispatch = (dispatch) => ({
  getUserAPI: (data) => dispatch(getUserAPI(data)),
})
export default connect(null, reduxDispatch)(ItemCommentOrganism)