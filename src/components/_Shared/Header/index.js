import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderButton from '../../HeaderButton';
const days = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche'
];

const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
];

export default function Header() {
    const date = new Date()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {days[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()]}
            </Text>
            <HeaderButton/>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10, 
        alignSelf:'flex-end', 
        
        flexDirection:"row",
        marginTop:30
    },
    title: {
        color: 'white',
        fontSize: 25,
        marginRight:70,
        textAlign:'center',
        fontWeight: 'bold'
    }
})