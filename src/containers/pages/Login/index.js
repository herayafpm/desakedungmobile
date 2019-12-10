import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, Text, Image,StyleSheet,ActivityIndicator } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import { loginUserAPI, setUserLogin, setUserData, getUserAPI } from '../../../config/redux/action'



class Login extends Component {
  state={
    nik:'',
    kataSandi:'',
    showSandi: false,
    iconEyes: require('../../../assets/icon/eye.png'),
    isLoading: true,
    isDisabled: true
  }
  _onChangeInput(e,type){
    this.setState({
      ...this.state,
      [type]: e.nativeEvent.text
    })
  }
  componentDidMount(){
    if(this.props.isLogin){
      this.props.navigation.navigate('HomeStack')
    }
  }
  _authLogin(){
    const state = this.state
    if(state.nik === '' || state.kataSandi === ''){
      alert('Data tidak boleh kosong!')
    }else{
      this._handleLoginSubmit()
    }
  }

  async _handleLoginSubmit() {
      const { nik, kataSandi,isDisabled } = this.state;
      this.setState({
        isDisabled: !isDisabled
      })
      const res = await this.props.loginUserAPI({ nik, kataSandi }).catch(err => err);
      if(res){
        this.setState({
          isDisabled: !!isDisabled
        })
        if(res.status){
          this.props.setUserLogin(true);
          const data = {
            nik: res.data.nik,
            api_token: res.api_token
          };
          this.props.setUserData(data);
          this.props.navigation.navigate('HomeStack');
        }else{
          alert('NIK atau Kata sandi salah!');
        }
      }
  }
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.04)' }}>
        <Image style={{ width: 120, height: 120, marginBottom: 30 }} source={require('../../../assets/img/banyumas.png')} />
        <View style={{ backgroundColor: 'white', width: 220, borderWidth: 1, borderColor: 'rgba(0,0,0,0.3)', borderRadius: 6, marginBottom: 30 }}>
          <TextInput placeholder='NIK' onChange={(e) => this._onChangeInput(e,'nik')}/>
          <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
            <TextInput secureTextEntry={!this.state.showSandi} placeholder='Kata sandi' style={[{width:'100%',paddingRight:30}]} onChange={(e) => this._onChangeInput(e,'kataSandi')}/>
            <View style={{position:'absolute',right:10}}>
              <TouchableOpacity onPress={() => this.setState({
                showSandi: !this.state.showSandi
              })}>
                <Image source={this.state.iconEyes} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity disabled={!this.state.isDisabled} style={[styles.btn,!this.state.isDisabled ? styles.btnDisabled:null]} onPress={() => this._authLogin()}>
          {this.props.isLoading ? 
          <ActivityIndicator animating/>:<Text style={{ color: 'white', fontSize: 15 }}>Masuk</Text> }
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold' }}>Desa KedungGede</Text>
        <TouchableOpacity>
          <Text style={{ textDecorationLine: 'underline', color: 'red', marginTop: 50, marginLeft: 120 }}>Lupa Kata Sandi?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  btn:{
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#55dfc4',
    borderRadius: 40,
    marginBottom: 30
  },
  btnDisabled:{
    backgroundColor: 'rgba(0,220,180,.3)'
  },
  error: {
    borderColor:'red',
    borderWidth:1
  },
  correct:{
    borderColor:'green',
    borderWidth:1
  }
})

const reduxState = (state) => ({
  isLoading: state.isLoading,
  isLogin: state.isLogin
})

const reduxDispatch = (dispatch) => ({
  loginUserAPI: (data) => dispatch(loginUserAPI(data)),
  setUserLogin: (data) => dispatch(setUserLogin(data)),
  setUserData: (data) => dispatch(setUserData(data)),
  getUserAPI: (data) => dispatch(getUserAPI(data)),
})

export default connect(reduxState,reduxDispatch)(Login)