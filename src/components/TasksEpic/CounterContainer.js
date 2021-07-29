import React from 'react';
import { StyleSheet, View } from 'react-native';
import Counter from '../_Shared/Counter';



const CountersContainer = ({ nbTasks, nbTasksCompleted }) => {
    return (
        <View style={styles.container}>
            <Counter
                nb={nbTasks}
                title={'Tâches créées'}
            />
            <Counter
                nb={nbTasksCompleted}
                title={'Tâches complétées'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 20, 
        marginHorizontal:20
    },
})

export default CountersContainer;