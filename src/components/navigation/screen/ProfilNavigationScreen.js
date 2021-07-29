import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ************Components ********************
import ProfilScreen from '../../../screen/ProfilScreen';
// ******************************************
const Stack = createStackNavigator();

const ProfilNavigationScreen = (props, { navigation, route}) => {

    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="ProfilScreen"
                    options={{
                        header: ()=> null,
                    }} 
                    component={ProfilScreen}/>

                {/* <Stack.Screen
                name="RegisterScreen"
                options={{
                    title:'Retourner à la page de connexion'
                }} 
                component={RegisterScreen} /> */}
            </Stack.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        
    }

})

export default ProfilNavigationScreen;