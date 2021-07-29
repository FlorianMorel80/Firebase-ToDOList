import * as React from 'react';
import {ImageBackground, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

import LogNavigationScreen from './screen/LogNavigationScreen' ;
import ToDoNavigationScreen from './screen/ToDoNavigationScreen';
import ProfilNavigationScreen from './screen/ProfilNavigationScreen';


const TabNavigation = (props) => {
    const {data} = props
    // console.log('tab', data)
    return (

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        switch (route.name) {
                            case "Profil":
                                iconName = 'person-circle-outline';
                                break;
                            case "Vos Tâches":
                                iconName = 'list-circle-outline';
                                break;
                        }

                        iconName = `${Platform.OS === "ios" ? "ios-" : "md-"}${iconName}`

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#FFF',
                    inactiveTintColor: '#FFF',
                
                    labelStyle: 'white',
                    style: { borderTopWidth: 0,backgroundColor:'#4746C3', borderRadius: 50, width:'90%', height: 50, position:'absolute', left:'5%', bottom:'1%' }
                }}
            >
                {/* <Image 
                source={require('../../../assets/img/splash.png')}/> */}
                <Tab.Screen name="Vos Tâches">
                    {() => <ToDoNavigationScreen data={data} />}
                </Tab.Screen>
                <Tab.Screen name="Profil">
                    {() => <ProfilNavigationScreen data={data}/>}
                </Tab.Screen> 
                    {/* <Tab.Screen name="Profil">

                </Tab.Screen> */}
            </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    
})
export default TabNavigation;