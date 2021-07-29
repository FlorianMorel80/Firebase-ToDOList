
import { ListItem, Avatar } from 'react-native-elements'
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



const ListScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Liste</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})

export default ListScreen;