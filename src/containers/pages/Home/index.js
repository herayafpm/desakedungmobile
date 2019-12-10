import React, {Component} from 'react';
import {
  ScrollView,
  View,
} from 'react-native';


import BtnHomeFeature from '../../../components/molecules/BtnHomeFeature'
import HeaderApp from '../../../components/molecules/HeaderApp'
import { withNavigation } from 'react-navigation';
class Home extends Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <ScrollView style={{flex:1}}>
          <HeaderApp img={require('../../../assets/img/gn_slamet.png')} title='Aplikasi Desa KedungGede' onPress={() => this.props.navigation.navigate('Profil')}/>
          <View style={{flexDirection: 'row',flex:1,flexWrap:'wrap',justifyContent:'space-around',paddingHorizontal:40,paddingVertical:20}}>
            <BtnHomeFeature onPress={() => this.props.navigation.navigate('InfoTerkini')} img={require('../../../assets/img/home1.png')}/>
            <BtnHomeFeature onPress={() => alert('Comming Soon')} img={require('../../../assets/img/home2.png')}/>
            <BtnHomeFeature onPress={() => this.props.navigation.navigate('Bantuan')} img={require('../../../assets/img/home3.png')}/>
            <BtnHomeFeature onPress={() => this.props.navigation.navigate('Aduan')} img={require('../../../assets/img/home4.png')}/>
            <BtnHomeFeature onPress={() => this.props.navigation.navigate('Pelayanan')} img={require('../../../assets/img/home5.png')}/>
            <BtnHomeFeature onPress={() => this.props.navigation.navigate('InfoDesa')} img={require('../../../assets/img/home6.png')}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default withNavigation(Home)