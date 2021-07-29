import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Counter = ({ nb, title }) => {
    return (
        <View>
            <Text style={styles.count}>
                {nb}
            </Text>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    count: {
        fontWeight: 'bold',
        fontSize: 20, 
        color:'white',
        fontFamily: 'Roboto'
        
    },

    title: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Roboto'
    }
})
export default Counter;