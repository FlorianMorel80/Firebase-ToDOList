import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const TaskTile = ({ id, title, task, onChangeStatus, completed, onDeleteTask }) => {
    return (
        <TouchableOpacity
            style={{backgroundColor:'rgba(000,000,000, 0.5)'}}
            onPress={() => onChangeStatus(task)}
        >

            <View style={completed ? styles.taskItemDone : styles.taskItem}>
                <View style={styles.subContainer}>
                    <Image
                        style={completed 
                            ? styles.done
                            : styles.icon}
                        source={completed
                            ? require('../../../assets/img/iconCheck.png')
                            : require('../../../assets//img/iconCircle.png')}
                    />
                    <Text style={completed ? styles.donetxt : styles.nodone }>
                        {title}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => onDeleteTask(task)}>
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/img/iconBin.png')}
                    />
                </TouchableOpacity>

            </View >
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,

    },

    done:{
        backgroundColor:'lightgreen',
        paddingLeft:20,
        borderRadius:40, 
    },
    donetxt:{
        backgroundColor:'lightgreen',
        paddingLeft:20,
        borderRadius:40, 
        color:'black', 
        fontSize:16,
        textDecorationLine: 'line-through'
    },
    nodone:{
        paddingLeft:20,
        fontSize:16,
        borderRadius:40, 
        color:'white', 
         
    },

    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginHorizontal:20
        // backgroundColor:'rgba(255,255,255, 0.4)'
    },
    taskItemDone: {
        flexDirection: 'row',
        marginHorizontal:20,
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor:'lightgreen'
    },

    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        marginLeft: 30
    }
})



export default React.memo(TaskTile);