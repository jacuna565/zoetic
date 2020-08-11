import React from 'react';
import {Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../stackNavigators/Home';
// import VitalsStack from './stackNavigators/VitalsStack';
// import DoctorStack from './stackNavigators/DoctorStack';

const tabOpt = { 
    showIcon: true, 
    activeTintColor: '#8b19be', //purple
    inactiveTintColor: '#808080', //gray
    // activeBackgroundColor: '',
    // inactiveBackgroundColor: '',
    style: {
        backgroundColor: '#fff', // TabBar background,
        borderTopWidth: 0,
        height: 75
    },
    labelTitle:{
        // fontSize: 12,
    }
};


const homeLabel = (color) => <View style={{alignItems: 'center'}}>
                    <Text style={[tabOpt.labelTitle,{color: (color === '#FFFFFF') ? 'red': 'green'}]}>Home</Text>
                </View>;

const vitalsLabel = (color) => <View style={{alignItems: 'center'}}>
                    <Text style={[tabOpt.labelTitle,{color: (color === '#FFFFFF') ? 'red' : 'green'}]}>Vitals</Text>
                </View>;

const doctorLabel = (color) => <View style={{alignItems: 'center'}}>
                    <Text style={[tabOpt.labelTitle,{color: (color === '#FFFFFF') ? 'red' : 'green'}]}>Doctor</Text>
                </View>;
                
const Tab = createBottomTabNavigator();

function AppTabNavigator(){
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabel: ({color}) => {
                    let tabLabel;
                    if (route.name === 'HomeStack') {
                        tabLabel = homeLabel(color)
                    } else if (route.name === 'VitalsStack') {
                        tabLabel = vitalsLabel(color)
                    } else if (route.name === 'DoctorStack') {
                        tabLabel = doctorLabel(color)
                    } 
                    return tabLabel;
                },
                // tabBarIcon: ({ focused, color, size }) => {
                //     let iconName;
                //     if (route.name === 'Home') {
                //         iconName = 'home'
                //     } else if (route.name === 'Vitals') {
                //         iconName = 'vitals';
                //     } else if (route.name === 'Doctor') {
                //         iconName = 'doctor';
                //     } 
    
                //     return <Icon style={styles.icon} name={iconName}/>
                // },
            })}
            >
            <Tab.Screen name='Home' component={HomeStack} />
        </Tab.Navigator>
    )
}

export default AppTabNavigator;