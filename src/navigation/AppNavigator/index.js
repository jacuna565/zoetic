import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppDrawerNavigator from '../AppDrawerNavigator';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={AppDrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
