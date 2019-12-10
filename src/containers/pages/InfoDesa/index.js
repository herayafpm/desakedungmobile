import React, {Component} from 'react'
import {View,Text,ScrollView} from 'react-native'
import {connect} from 'react-redux'
import GreenHeader from '../../../components/molecules/GreenHeader'
import CardItemInfoDesa from '../../../components/molecules/CardItemInfoDesa'

class InfoDesa extends Component {
  state = {
    siteUrl: 'http://192.168.137.1/desakedung1/public/assets/uploads/profildesa/'
  }
  render() {
    return(
      <View style={{flex:1}}>
        <GreenHeader title='Info Desa'/>
        <ScrollView style={{backgroundColor:'rgba(128,128,128,0.1)',flex:1}}>
          <CardItemInfoDesa text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquam porro repellat quis, asperiores eligendi animi reiciendis assumenda commodi, velit rem perferendis voluptatum nam consectetur quaerat ea quisquam ab? A?'
          title = 'Visi dan Misi Desa Kedunggede'
          img =''
          />
          <CardItemInfoDesa text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquam porro repellat quis, asperiores eligendi animi reiciendis assumenda commodi, velit rem perferendis voluptatum nam consectetur quaerat ea quisquam ab? A?' title='Struktur Pemerintahan Desa'
          img = {this.state.siteUrl+ '/assets/uploads/profildesa/'}/>
          <CardItemInfoDesa text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquam porro repellat quis, asperiores eligendi animi reiciendis assumenda commodi, velit rem perferendis voluptatum nam consectetur quaerat ea quisquam ab? A?' title='BPD'
          img = {this.state.siteUrl+ 'BPD.jpeg'}/>
          <CardItemInfoDesa text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquam porro repellat quis, asperiores eligendi animi reiciendis assumenda commodi, velit rem perferendis voluptatum nam consectetur quaerat ea quisquam ab? A?' title='BUMDES'
          img ={this.state.siteUrl+ 'BUMDES.jpeg'}/>
          <CardItemInfoDesa text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquam porro repellat quis, asperiores eligendi animi reiciendis assumenda commodi, velit rem perferendis voluptatum nam consectetur quaerat ea quisquam ab? A?' title='RT'
          img ={this.state.siteUrl+ 'RT.jpeg'}/>
          <CardItemInfoDesa text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquam porro repellat quis, asperiores eligendi animi reiciendis assumenda commodi, velit rem perferendis voluptatum nam consectetur quaerat ea quisquam ab? A?' title='RW'
          img ={this.state.siteUrl+ 'RW.jpeg'}/>
        </ScrollView>
      </View>
    )
  }
}

export default connect(null,null)(InfoDesa)