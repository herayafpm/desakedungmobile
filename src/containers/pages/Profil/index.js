import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View,Text,ScrollView,Picker,Image,StyleSheet,ActivityIndicator} from 'react-native'
import GreenHeader from '../../../components/molecules/GreenHeader'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { getUserAPI, setUserData, setUserAPI } from '../../../config/redux/action'

class Profil extends Component {
  state = {
    user: '',
    password: '',
    isDisabled: true
  }
  componentDidMount() {
    this._getUserAPI()
  }
  _onHandleChangeText(e,type){
    if(type=== 'no_hp'){
      this.props.setUserData({
        ...this.props.user,
        no_hp: e.nativeEvent.text
      })
    }
    else if(type === 'email'){
      this.props.setUserData({
        ...this.props.user,
        email: e.nativeEvent.text
      })
    }
    else if(type === 'password'){
      this.setState({
        password: e.nativeEvent.text
      })
    }
  }

  async _getUserAPI() {
    const res = await this.props.getUserAPI({nik: this.props.user.nik}).catch(err => err)
    if(res){
      if(res.status){
        this.setState({
          user: res.data
        })
      }
    }
  }

  async _onHandleSubmit() {
    this.setState({
      isDisabled: !this.state.isDisabled
    })
    const data = {
      nik: this.props.user.nik,
      email: this.props.user.email,
      no_hp: this.props.user.no_hp,
      password: this.state.password,
    }
    const res = await this.props.setUserAPI(data).catch(err => err)
    if(res){
      this.setState({
        isDisabled: false
      })
      if(res.status){
        alert('Data Berhasil Disimpan')
      }
      else{
         alert('Data Gagal Disimpan')
      }
    }
  }
  render() {
    return(
      <View style={{flex:1}}>
        <GreenHeader title='Profil'/>
        <ScrollView style={{backgroundColor:'rgba(128,128,128,0.1)',flex:1,padding:18}}>
          <Text style={{fontSize:16,marginBottom:-6,fontWeight:'bold'}}>Id User</Text>
          <TextInput editable={false} style={{borderBottomWidth:1,marginBottom:20,textAlignVertical:'bottom',padding:0}} defaultValue={this.state.user.nik}/>
          <Text style={{fontSize:16,marginBottom:-6,fontWeight:'bold'}}>Nama Lengkap</Text>
          <TextInput editable={false} style={{borderBottomWidth:1,marginBottom:20,textAlignVertical:'bottom',padding:0}} defaultValue={this.state.user.name}/>
          <Text style={{fontSize:16,marginBottom:-6,fontWeight:'bold'}}>Tempat/tanggal lahir</Text>
          <TextInput editable={false} style={{borderBottomWidth:1,marginBottom:20,textAlignVertical:'bottom',padding:0}} defaultValue={this.state.user.ttl}/>
          <Text style={{fontSize:16,marginBottom:-6,fontWeight:'bold'}}>Alamat</Text>
          <TextInput multiline editable={false} style={{borderBottomWidth:1,marginBottom:20,textAlignVertical:'bottom',padding:0}} defaultValue={this.state.user.address}/>
          <Text style={{fontSize:16,marginBottom:-6,fontWeight:'bold'}}>No HP</Text>
          <TextInput onChange={(e) => this._onHandleChangeText(e,'no_hp')} name="no_hp" style={{borderBottomWidth:1,marginBottom:20,textAlignVertical:'bottom',padding:0}} defaultValue={this.state.user.no_hp}/>
          <Text style={{fontSize:16,marginBottom:-6,fontWeight:'bold'}}>Email</Text>
          <TextInput onChange={(e) => this._onHandleChangeText(e,'email')} name="email" style={{borderBottomWidth:1,marginBottom:20,textAlignVertical:'bottom',padding:0}} defaultValue={this.state.user.email}/>
          <Text style={{fontSize:16,marginBottom:-6,fontWeight:'bold'}}>Status</Text>
          <TextInput editable={false} style={{borderBottomWidth:1,marginBottom:20,textAlignVertical:'bottom',padding:0}} defaultValue={this.state.user.role}/>
          <Text style={{fontSize:16,marginBottom:-6,fontWeight:'bold'}}>Password</Text>
          <TextInput onChange={(e) => this._onHandleChangeText(e,'password')} style={{borderBottomWidth:1,marginBottom:20,textAlignVertical:'bottom',padding:0}}/>
          <View style={{flex:1,alignItems:'flex-end',marginBottom:30}}>
            <TouchableOpacity disabled={!this.state.isDisabled} style={[styles.btn,!this.state.isDisabled ? styles.btnDisabled:null]} onPress={() => this._onHandleSubmit()}>
              {this.props.isLoading ? 
              <ActivityIndicator animating/>:<Text style={{ color: 'white', fontSize: 15 }}>Simpan</Text> }
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#55dfc4',
    borderRadius: 40,
    marginBottom: 30
  },
  btnDisabled: {
    backgroundColor: 'rgba(0,220,180,.3)'
  },
})

const reduxState = (state) => ({
  isLoading: state.isLoading,
  user: state.user
})

const reduxDispatch = (dispatch) => ({
  getUserAPI: (data) => dispatch(getUserAPI(data)),
  setUserAPI: (data) => dispatch(setUserAPI(data)),
  setUserData: (data) => dispatch(setUserData(data)),
})

export default connect(reduxState,reduxDispatch)(Profil)