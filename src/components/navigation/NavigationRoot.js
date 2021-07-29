import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import LogNavigationScreen from './screen/LogNavigationScreen';
import TabNavigation from './TabNavigation';


export default function NavigationRoot({setUserID}) {
  return (
    <NavigationContainer>
      {setUserID === null ? <LogNavigationScreen /> : <TabNavigation/>}
    </NavigationContainer>
  );
}
