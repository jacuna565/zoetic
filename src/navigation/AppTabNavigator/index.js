import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
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
    labelTitle:{
        fontSize: 14
    }
};


const homeLabel = (color) => <View style={{alignItems: 'center'}}>
                    <Text style={[tabOpt.labelTitle,{color: color}]}>Home</Text>
                </View>;

const vitalsLabel = (color) => <View style={{alignItems: 'center'}}>
                    <Text style={[tabOpt.labelTitle,{color: color}]}>Vitals</Text>
                </View>;

const doctorLabel = (color) => <View style={{alignItems: 'center'}}>
                    <Text style={[tabOpt.labelTitle,{color: color}]}>Doctor</Text>
                </View>;
const tabLabel = (label, color) => <View style={{alignItems: 'center'}}>
            <Text style={[tabOpt.labelTitle,{color: color}]}>{label}</Text>
        </View>;
                
const Tab = createBottomTabNavigator();

function AppTabNavigator(){
    return (
        <Tab.Navigator
            initialRouteName='Vitals'
            screenOptions={({ route }) => ({
                tabBarLabel: ({color}) => {
                    return tabLabel(route.name, color);
                },
                tabBarIcon: ({ focused, color }) => {
                    let iconName = (route.name === 'Home') ? 'home' : (route.name === 'Vitals') ? 'barschart' : 'medicinebox';
                    return <Icon name={iconName} style={{color:(focused) ? color : colors.secondaryColor, fontSize: 24}}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.primaryColor,
                inactiveTintColor: colors.secondaryColor,
                activeBackgroundColor: colors.white,
                inactiveBackgroundColor: colors.white
            }}
            >
            <Tab.Screen name='Home' component={HomeStack} />
            <Tab.Screen name='Vitals' component={VitalsStack} />
            <Tab.Screen name='Doctor' component={DoctorStack} />
        </Tab.Navigator>
    )
}

export default AppTabNavigator;