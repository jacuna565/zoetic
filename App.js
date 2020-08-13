
import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import Splash from './src/screens/Splash';

import allActions from './src/actions';

const App = () =>{
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect( () =>{
        dispatch(allActions.measurementActions.loadMeasurements())
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