import React, {Component} from 'react'
import {View,Text,ScrollView,Picker,Image,StyleSheet,ActivityIndicator} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import {connect} from 'react-redux'
import GreenHeader from '../../../components/molecules/GreenHeader'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { getJenisBantuanAPI, postBantuanAPI,getSoalBantuanAPI } from '../../../config/redux/action'

class Bantuan extends Component {
  state={
    jenisBantuans: [{nama_bantuan:'Bantuan 1',id:0}],
    lampiran: [],
    komentar: '',
    jenisBantuan: '',
    isDisabled: true,
    radio_props : [
      {label: 'param1', value: 0},
      {label: 'param2', value: 1},
    ]
  }
  componentDidMount(){
    this._getJenisBantuan()
  }
  async _getJenisBantuan(){
    const res = await this.props.getJenisBantuanAPI().catch(err => err)
    if(res){
      try{
        if(res.data){
          this.setState({
            jenisBantuans: res.data
          })
        }
      }
      catch(err){
        alert(err)
      }
    }
  }

  _handleChangeText(e,type){
    this.setState({
      [type]:e.nativeEvent.text
    })
  }

  async _handleValueBantuan(itemValue,itemIndex){
    this.setState({
      jenisBantuan: itemValue
    })
    const res = await this.props.getSoalBantuanAPI({id: itemValue}).catch(e => e)
    console.log(res)
  }

  async _onHandleSubmit() {
    const data = {
      nik: this.props.user.nik,
      jenisBantuan: this.state.jenisBantuan,
      komentar: this.state.komentar
    }
    const res = await this.props.postBantuanAPI(data).catch(err => err)
    if (res) {
      if(res.status){
        this.setState({
          komentar: '',
          jenisBantuan: '',
          isDisabled: true
        })
      }
      alert(res.message)
    }
  }

  render() {
    const itemJenisBantuan = this.state.jenisBantuans.map((item,key) =>
      <Picker.Item label={item.nama_bantuan} value={key}/>
    )
    return(
      <View style={{flex:1}}>
        <GreenHeader title='Bantuan'/>
        <ScrollView style={{backgroundColor:'rgba(128,128,128,0.1)',flex:1,padding:18}}>
          <Text style={{fontSize:18,marginBottom:12}}>{this.props.user.nama}</Text>
          <Text style={{fontSize:14,marginBottom:5}}>Pilih Jenis Bantuan</Text>
          <Picker selectedValue={this.state.jenisBantuan} onValueChange={(itemValue,itemIndex) => this._handleValueBantuan(itemValue,itemIndex)} style={{backgroundColor:'white',marginBottom:12}}>
            <Picker.Item label='--Pilih Jenis Bantuan--' value=''/>
            {
              itemJenisBantuan
            }
          </Picker>
          <Text style={{fontSize:14,marginBottom:5}}>Variable</Text>
          <View>
            <Text>Soal</Text>
            <RadioForm
              radio_props={this.state.radio_props}
              initial={0}
              animation={true}
              onPress={(value) => alert(value)}
            />
          </View>
          <Text style={{fontSize:14,marginBottom:5}}>Komentar</Text>
          <TextInput onChange={(e) => this._handleChangeText(e,'komentar')} multiline style={{height:120,backgroundColor:'white',textAlignVertical:'top',padding:10,marginBottom:12}} placeholder='Masukkan komentar anda disini'/>
          <View style={{flex:1,alignItems:'flex-end',marginTop:40}}>
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
  getJenisBantuanAPI: (data) => dispatch(getJenisBantuanAPI(data)),
  postBantuanAPI: (data) => dispatch(postBantuanAPI(data)),
  getSoalBantuanAPI: (data) => dispatch(getSoalBantuanAPI(data)),
})

export default connect(reduxState,reduxDispatch)(Bantuan)