
import React, { useState, useEffect} from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

import Splash from './src/screens/Splash';

const App = () =>{
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () =>{
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);        
    },[])
    
    let rndr;

    if (isLoading) {
        rndr = <Splash />;
    }else {
        rndr = <AppNavigator />;
    } 

    return <NavigationContainer>{ rndr }</NavigationContainer>
    
        
}

export default App;