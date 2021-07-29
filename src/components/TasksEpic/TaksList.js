import React from 'react';
import { FlatList } from 'react-native';

import TaskTile from './TaskTile'

const TasksList = ({ id, todos, title, onChangeStatus, onDeleteTask }) => {
    const _renderItem = ({ item }) => {
        return(
        <TaskTile
            task={title}
            completed={item.status === 'open' ? false : true}
            onChangeStatus={onChangeStatus}
            onDeleteTask={onDeleteTask}>
        </TaskTile>
    )}
    return (
        <FlatList
            data={todos}
            renderItem={_renderItem}
            keyExtractor={item => item.id}
        />
    );
};

export default TasksList;