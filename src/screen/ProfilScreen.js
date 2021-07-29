import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';

import ProfilForm from '../components/form/ProfilForm'
const image = require('../../assets/img/profil.jpg') ;

const ProfilScreen = ({navigation}) => {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <ProfilForm navigation = {navigation}/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
})
export default ProfilScreen;