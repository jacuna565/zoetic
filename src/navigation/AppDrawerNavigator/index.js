import React from 'react';
import {View, Text, Platform} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppTabNavigator from '../AppTabNavigator';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = (props) => {
    return (
        <Drawer.Navigator initialRouteName='HomeStack'  drawerContent={props => <CustomDrawerContent {...props}/>}>
            <Drawer.Screen name='HomeStack' component={AppTabNavigator}
                options={{
                    drawerLabel: () => { return <View><Icon name="view-dashboard-outline"/><Text>Home</Text></View>}
                }} 
            />
        </Drawer.Navigator>
    )
}


const CustomDrawerContent = (props) => {
    return (
    <View>
        <View>
            <View>
                <View>             
                    <Icon
                        onPress={() => props.navigation.closeDrawer()}
                        name="close"
                        size={32}
                        color={'#ff00ff'}
                        style={{marginTop:(Platform.OS === 'ios') ? 25 : 0}}
                    /> 
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} activeTintColor={'red'} activeBackgroundColor={'transparent'}/>
            </DrawerContentScrollView>
            <View style={{position:"absolute", bottom:10, right: 10}}><Text style={[{fontSize: 12}]}>Develop by: Jan Acuna</Text></View>
        </View>
    </View>)
};

export default AppDrawerNavigator;