import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';

import LoginForm from '../components/form/LoginForm'
const image = require('../../assets/img/vert.jpg') ;

const LogInScreen = ({navigation}) => {
    return(
        <View style={{flex:1}}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <LoginForm navigation = {navigation}/>
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
export default LogInScreen;