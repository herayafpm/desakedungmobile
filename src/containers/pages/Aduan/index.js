import React, {Component} from 'react'
import {View,Text,ScrollView,Picker,Image,StyleSheet,ActivityIndicator} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux'
import GreenHeader from '../../../components/molecules/GreenHeader'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { getJenisAduanAPI, postAduanAPI } from '../../../config/redux/action'

class Aduan extends Component {
  state={
    jenisAduans: [{nama_aduan:'Aduan 1',id:0}],
    lampiran: [],
    komentar: '',
    jenisAduan: '',
    isDisabled: true
  }
  componentDidMount(){
    this._getJenisAduan()
  }
  async _getJenisAduan(){
    const res = await this.props.getJenisAduanAPI().catch(err => err)
    console.log(res)
    if(res){
      try{
        if(res.data !== undefined){
          this.setState({
            jenisAduans: res.data
          })
        }
      }
      catch(err){
        alert(err)
      }
    }
  }
  _getLampiran(){
    ImagePicker.openPicker({
      includeBase64: true,
      multiple:true
    }).then(images => {
      this.setState({
        lampiran: images
      })
    });
  }

  _handleChangeText(e,type){
    this.setState({
      [type]:e.nativeEvent.text
    })
  }

  _handleValueAduan(itemValue,itemIndex){
    this.setState({
      jenisAduan: itemValue
    })
  }

  async _onHandleSubmit() {
    const data = {
      nik: this.props.user.nik,
      jenisAduan: this.state.jenisAduan,
      lampiran: this.state.lampiran,
      komentar: this.state.komentar
    }
    const res = await this.props.postAduanAPI(data).catch(err => err)
    if (res) {
      if(res.status){
        this.setState({
          lampiran: [],
          komentar: '',
          jenisAduan: '',
          isDisabled: true
        })
        alert('Berhasil Mengadu')
        this.props.navigation.navigate('Home')
      }
    }
  }

  render() {
    const itemJenisAduan = this.state.jenisAduans.map((item,key) =>
      <Picker.Item label={item.nama_aduan} value={key}/>
    )
    return(
      <View style={{flex:1}}>
        <GreenHeader title='Aduan'/>
        <ScrollView style={{backgroundColor:'rgba(128,128,128,0.1)',flex:1,padding:18}}>
          <Text style={{fontSize:18,marginBottom:12}}>{this.props.user.nik}</Text>
          <Text style={{fontSize:14,marginBottom:5}}>Pilih Jenis Aduan</Text>
          <Picker selectedValue={this.state.jenisAduan} onValueChange={(itemValue,itemIndex) => this._handleValueAduan(itemValue,itemIndex)} style={{backgroundColor:'white',marginBottom:12}}>
            <Picker.Item label='--Pilih Jenis Aduan--' value=''/>
            {
              itemJenisAduan
            }
          </Picker>
          <Text style={{fontSize:14,marginBottom:5}}>Komentar</Text>
          <TextInput onChange={(e) => this._handleChangeText(e,'komentar')} multiline style={{height:120,backgroundColor:'white',textAlignVertical:'top',padding:10,marginBottom:12}} placeholder='Masukkan komentar anda disini'/>
          <Text style={{fontSize:14,marginBottom:5}}>Lampiran</Text>
          <TouchableOpacity onPress={()=> this._getLampiran()} style={{padding:5,flex:1,flexDirection:'row',alignItems:'center'}}>
            <View style={{backgroundColor:'white',padding:10,borderRadius:25,width:45,justifyContent:'center',marginRight:10}}>
              <Image source={require('../../../assets/icon/upload.png')}/>
            </View>
            <Text style={{fontSize:14}}>
              {
                (this.state.lampiran.length !== 0)? 
                this.state.lampiran.map((item,key)=> {
                  return item.modificationDate + ', '
                })
                : 'Belum ada file yang dipilih'
              }
            </Text>
          </TouchableOpacity>
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
  getJenisAduanAPI: (data) => dispatch(getJenisAduanAPI(data)),
  postAduanAPI: (data) => dispatch(postAduanAPI(data)),
})

export default connect(reduxState,reduxDispatch)(Aduan)