import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';

import RegisterForm from '../components/form/RegisterForm'

const image = require('../../assets/img/vert.jpg') ;

const RegisterScreen = ({navigation}) => {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <RegisterForm navigation = {navigation}/>
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
export default RegisterScreen;