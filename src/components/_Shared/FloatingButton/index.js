import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const FloatingButton = ({ toggleForm, isFormOpened }) => {
    return (
        <TouchableOpacity onPress={toggleForm} style={styles.container}>
            {isFormOpened
                ? (<Text style={styles.title}>X</Text>)
                : (<Text style={styles.title}>+</Text>)
            }

        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 70,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#4746C3',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 35,
        textAlign: 'center', 
        justifyContent:'center'
    }
})

export default FloatingButton;