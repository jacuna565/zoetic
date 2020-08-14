import React from 'react';
import {Text, View} from 'react-native';
import _ from 'lodash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import HomeStack from '../stackNavigators/Home';
import VitalsStack from '../stackNavigators/Vitals';
import DoctorStack from '../stackNavigators/Doctor';

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
    <Text style={[tabOpt.labelTitle, {color: color}]}>
      {_.isEqual(label, 'HomeStack')
        ? 'Home'
        : _.isEqual(label, 'VitalsStack')
        ? 'Vitals'
        : 'Doctor'}
    </Text>
  </View>
);

const Tab = createBottomTabNavigator();

function AppTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="VitalsStack"
      screenOptions={({route}) => ({
        tabBarLabel: ({color}) => {
          return tabLabel(route.name, color);
        },
        tabBarIcon: ({focused, color}) => {
          let iconName = _.isEqual(route.name, 'HomeStack')
            ? 'home'
            : _.isEqual(route.name, 'VitalsStack')
            ? 'barschart'
            : 'medicinebox';
          return (
            <Icon
              type="AntDesign"
              style={{
                color: focused ? color : colors.secondaryColor,
                fontSize: 24,
              }}
              name={iconName}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primaryColor,
        inactiveTintColor: colors.secondaryColor,
        activeBackgroundColor: colors.white,
        inactiveBackgroundColor: colors.white,
      }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="VitalsStack" component={VitalsStack} />
      <Tab.Screen name="DoctorStack" component={DoctorStack} />
    </Tab.Navigator>
  );
}

export default AppTabNavigator;
