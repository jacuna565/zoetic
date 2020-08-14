import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import VitalsKit from '../../screens/VitalsKit';
import Camera from '../../screens/Camera';

import {colors} from '../../globals/styles';

const tabOpt = {
  showIcon: true,
  activeTintColor: colors.primaryColor,
  inactiveTintColor: colors.secondaryColor,
  activeBackgroundColor: colors.white,
  inactiveBackgroundColor: colors.white,
  style: {
    backgroundColor: colors.white,
  },
  labelTitle: {
    fontSize: 14,
  },
};

const tabLabel = (label, color) => (
  <View style={{alignItems: 'center'}}>
    <Text style={[tabOpt.labelTitle, {color: color}]}>{label}</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();

function MeasureTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Vitals Kit"
      screenOptions={({route}) => ({
        tabBarLabel: ({color}) => {
          return tabLabel(route.name, color);
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primaryColor,
        inactiveTintColor: colors.secondaryColor,
        activeBackgroundColor: colors.white,
        inactiveBackgroundColor: colors.white,
        indicatorStyle: {backgroundColor: colors.primaryColor},
      }}>
      <Tab.Screen name="Vitals Kit" component={VitalsKit} />
      <Tab.Screen name="Camera" component={Camera} />
    </Tab.Navigator>
  );
}

export default MeasureTabNavigator;
