import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {Aduan,Bantuan,Home,InfoDesa,InfoTerkini,Pelayanan,Profil,Login} from '../../containers/pages'

const HomeStack = createStackNavigator({
  Aduan,
  Bantuan,
  Home,
  InfoDesa,
  InfoTerkini,
  Pelayanan,
  Profil
}, {
  headerMode: 'none',
  initialRouteName: 'Home'
})

const RouteSwitch = createSwitchNavigator(
  {
  HomeStack,
  Login
  },
  {
    headerMode:'none',
    initialRouteName: 'Login'
  }
)

export default createAppContainer(RouteSwitch)