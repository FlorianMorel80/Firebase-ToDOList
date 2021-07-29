import React, {useContext} from 'react';
import {Image, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
// import {AuthContext} from '../redux/contexts/AuthContext';

export default function HeaderButton() {
  // const {signOut} = useContext(AuthContext);

  async function onLogOut() {
    await signOut();
  }
  return (
    <TouchableOpacity 
      onPress={onLogOut}>
    <Image style={{justifyContent:'flex-end', marginRight:10, width:40, height:40}} source={require('../../assets/img/logout.png')} />
    </TouchableOpacity>)
}
