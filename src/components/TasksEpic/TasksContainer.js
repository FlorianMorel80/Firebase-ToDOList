import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
// import {getApp} from '../../database/realmApp';
// import openRealm from '../../database/openRealm';
// import { ObjectId } from 'bson';
import 'react-native-get-random-values';
//------------Import components-------------------
import TasksList from './TaksList';
import TaskForm from './TaskForm';
import CountersContainer from './CounterContainer';
import FloatingButton from '../_Shared/FloatingButton';
import Header from '../_Shared/Header/';


function TasksContainer(props) {
 
        async function createTask(taskName) {
            const app = getApp();
            const currentUser = app.currentUser;
        
            const realm = await openRealm();
        
            realm.write(() => {
            let tasks = realm.create(
                'Task',
                {
                    _id: ObjectId(),
                    _partition: currentUser.id,
                    name: taskName,
                    status: 'open',
                },
                'modified',
            );
            let user = realm.objectForPrimaryKey('User', ObjectId(currentUser.id));
            // let user = realm.objects('User')
            console.log('VOILAAAAAA', user.tasks);
        
            realm.create(
                'User',
                {
                ...user,
                _id: ObjectId(currentUser.id),
                tasks: [...user.tasks, tasks],
                },
                'modified',
            );
            });
        }


    const [tasks, setTasks] = useState([]);
       
    // afficher la liste des taches
  useEffect(() => {
    let realm;
    let tasks;
    const bootstrapAsync = async () => {
      try {
        realm = await openRealm();
        tasks = realm.objects('Task');

        setTasks([...tasks]);

        // Ecoute les changement dans la liste

        tasks.addListener(() => {
          // mettre le state avec les nouvelles valeurs
          setTasks([...tasks]);
        });
      } catch (error) {
        console.log(error);
      } 
    };
    bootstrapAsync();

    return () => {
      const bootstrapAsync = async () => {
        await tasks.removeAllListeners();
        await realm.close();
      };
      bootstrapAsync();
    };
  }, []);

    const [isFormOpened, setIsFormOpened] = useState(false);

    const onAddTask = (title) => {
        const newTask = {
            id: new Date().getTime(),
            title: title,
            completed: false
        };
        setTasks([newTask, ...tasks]);
    };



    async function onChangeStatus(task) {
        const newStatus = task.status === 'done' ? 'open' : 'done';
    
        const realm = await openRealm();
    
        realm.write(() => {
          task.status = newStatus;
        });
      }
    
      const onDeleteTask = async (task) => {
        const realm = await openRealm();
    
        realm.write(() => {
          realm.delete(task);
        })
    
        task = null;
      };

    const getTasksCompleted = () => {
        let counters = 0

        tasks.forEach(task => {
            if (task.completed) {
                counters++
            }
        })
    }

    const toggleForm = () => {
        setIsFormOpened(!isFormOpened)
    }

    const image = require('../../../assets/img/pira.jpg');

    return (
        <View style={styles.container}>
            
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                
                <Header/>
                {isFormOpened && <TaskForm onAddTask={onAddTask} createTask={createTask} />}
                
                <CountersContainer
                    nbTasks={tasks.length}
                    nbTasksCompleted={tasks.filter(task => task.status === 'done').length}
                />
                <TasksList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
                <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
        position: 'relative', 
        // padding:10,
        // paddingTop:30
    }, 
    image: {
        flex: 1,
        justifyContent: "center", 
        
      },
})

export default TasksContainer;