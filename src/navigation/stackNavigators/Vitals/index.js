
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

import {colors} from '../../../globals/styles';
import Vitals from '../../../screens/Vitals';

const Stack = createStackNavigator();

function VitalsStack({ navigation }){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Vitals'
                component={Vitals}
                options={{
                    headerTitle:() => <Text >Vitals</Text>,
                    headerLeft: () => 
                        <Icon
                            style={styles.icon} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                            name="menu"
                            size={32}
                            color={colors.primaryColor}
                        />,
                    headerRight: () => 
                        <Icon2
                            style={styles.icon}
                            name="plus"
                            size={32}
                            color={colors.primaryColor}
                        />,
                    headerTitleAlign:'center'
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    icon:{
        margin: 15
    }
});

export default VitalsStack;