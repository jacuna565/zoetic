import React from 'react';
import {View, Text, Platform} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';

import DashboardStack from '../AppTabNavigator';
import styles from './styles';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = (props) => {
    return (
        <Drawer.Navigator initialRouteName='HomeStack'  drawerContent={props => <CustomDrawerContent {...props}/>}>
            <Drawer.Screen name='HomeStack' component={DashboardStack}
                options={{
                    drawerLabel: () => { return <View style={styles.drawerLabelContainer}>
                        <Icon style={styles.icon} name="home"/>
                        <Text style={styles.drawerLabel}>My App</Text>
                    </View>}
                }} 
            />
        </Drawer.Navigator>
    )
}


const CustomDrawerContent = (props) => {
    return (
    <View>
        <View style={{height:'100%'}}>
            <View>
                <View style={styles.drawerCloseContainer}>             
                    <Icon
                        onPress={() => props.navigation.closeDrawer()}
                        name="close"
                        size={32}
                        color={'#8b19be'}
                        style={{marginTop:(Platform.OS === 'ios') ? 25 : 0}}
                    /> 
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} activeTintColor={'#8b19be'} />
            </DrawerContentScrollView>
            <View style={styles.drawerFooter}>
                <Text style={styles.drawerFooterText}>Developed by: Jan Acuna</Text></View>
        </View>
    </View>)
};

export default AppDrawerNavigator;