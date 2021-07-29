


































































import 'react-native-gesture-handler';
import React, {useReducer, useMemo} from 'react';

import {StatusBar, View} from 'react-native'

//-------------------- Personal components ---------------
// import TabNavigation from './src/components/navigation/TabNavigation';
import NavigationRoot from './src/components/navigation/NavigationRoot';

// --------------------------------------------------------

const App = () => {

  // const [state, dispatch] = useReducer(reducer, {
  //   isLoading: true,
  //   isSignout: false,
  //   userId: null,
  // });



    return (
      // <AuthContext.Provider value={authContext}>
      <View>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          hidden={false}
          translucent={true}
      />
        {/* <NavigationRoot/> */}
        <NavigationRoot setUserID={state.setUserID}/>
      </View>
      // </AuthContext.Provider>
    );
};


export default App;