import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import Splash from './src/screens/Splash';

import allActions from './src/actions';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const measurementReducer = useSelector((state) => state.measurementReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.measurementActions.loadMeasurements());
    setTimeout(() => {
      showLoader();
    }, 2000);
  }, []);

  const showLoader = () => {
    !measurementReducer.isLoading && setIsLoading(false);
  };

  let rndr;

  if (isLoading) {
    rndr = <Splash loading={isLoading} />;
  } else {
    rndr = <AppNavigator />;
  }

  return <NavigationContainer>{rndr}</NavigationContainer>;
};

export default App;
