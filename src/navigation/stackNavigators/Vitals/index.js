
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../globals/styles';
import Vitals from '../../../screens/Vitals';
import MeasureTabNavigator from '../../MeasureTabNavigator';

const Stack = createStackNavigator();

function VitalsStack({ navigation }){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Vitals'
                component={Vitals}
                options={{
                    headerStyle:{
                        backgroundColor: colors.primaryColor,
                        elevation: 0,
                        shadowOpacity: 0
                    },
                    headerTitle:() => <Text style={styles.headerTitle} >Vitals</Text>,
                    headerLeft: () => 
                        <Icon
                            style={styles.icon} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                            name="menu"
                            size={32}
                            color={colors.white}
                        />,
                    headerRight: () => 
                        <Icon
                            style={styles.icon} onPress={() => console.log('some stack or screen here!')}
                            name="add"
                            size={32}
                            color={colors.white}
                        />,
                    headerTitleAlign:'center'
                }}
            />
            <Stack.Screen 
                name='Measure'
                component={MeasureTabNavigator}
                options={{
                    headerStyle:{
                        backgroundColor: colors.white,
                        elevation: 0,
                        shadowOpacity: 0
                    },
                    headerTitle:() => <Text style={[styles.headerTitle,styles.headerTitleInvert]}>Vitals</Text>,
                    headerLeft: () => 
                    <Icon
                        style={styles.icon} onPress={() => navigation.navigate('Vitals')}
                        name="chevron-left"
                        size={24}
                        color={colors.primaryColor}
                    /> 
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    icon:{
        margin: 15
    },
    headerTitle:{
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    headerTitleInvert:{
        color: colors.primaryColor,
    }
});

export default VitalsStack;