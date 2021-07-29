import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ************Components ********************
import TasksContainer from '../../TasksEpic/TasksContainer';
import ProfilScreen from '../../../screen/ProfilScreen';
// ******************************************
const Stack = createStackNavigator();

const ToDoNavigationScreen = (props, { navigation, route}) => {

    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="TasksContainer"
                    options={{
                        header: ()=> null,
                    }} 
                    component={TasksContainer}/>

                {/* <Stack.Screen
                name="ProfilScreen"
                options={{
                    header: ()=> null,
                }} 
                component={ProfilScreen}/> */}
            </Stack.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        
    }

})

export default ToDoNavigationScreen;