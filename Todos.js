import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout,IconRegistry, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import NavigationRoot from './src/components/navigation/NavigationRoot';


function Todos() { 
    return(
    <>
        <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.dark}>
            <NavigationRoot/>
        </ApplicationProvider>
    </>
    );
}
export default Todos;