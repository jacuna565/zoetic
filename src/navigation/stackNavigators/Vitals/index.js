import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'native-base';
import {colors} from '../../../globals/styles';
import Vitals from '../../../screens/Vitals';
import MeasureTabNavigator from '../../MeasureTabNavigator';

const Stack = createStackNavigator();

function VitalsStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Vitals"
        component={Vitals}
        options={{
          headerStyle: {
            backgroundColor: colors.primaryColor,
            elevation: 0,
            shadowOpacity: 0,
            height: Platform.OS === 'ios' ? 120 : 60,
          },
          headerTitle: () => <Text style={styles.headerTitle}>Vitals</Text>,
          headerLeft: () => (
            <Icon
              type="MaterialIcons"
              style={styles.icon}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              name="menu"
              size={32}
              color="#fff"
            />
          ),
          headerRight: () => (
            <Icon
              type="Entypo"
              style={styles.icon}
              onPress={() => console.log('some stack or screen here!')}
              name="plus"
            />
          ),
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Measure"
        component={MeasureTabNavigator}
        options={{
          headerStyle: {
            backgroundColor: colors.white,
            elevation: 0,
            shadowOpacity: 0,
            height: Platform.OS === 'ios' ? 120 : 60,
          },
          headerTitle: () => (
            <Text style={[styles.headerTitle, styles.headerTitleInvert]}>
              Vitals
            </Text>
          ),
          headerLeft: () => (
            <Icon
              style={styles.iconInvert}
              onPress={() => navigation.navigate('Vitals')}
              type="Entypo"
              name="chevron-left"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    margin: 15,
    fontSize: 24,
    color: colors.white,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitleInvert: {
    color: colors.primaryColor,
  },
  iconInvert: {
    margin: 15,
    fontSize: 24,
    color: colors.primaryColor,
  },
});

export default VitalsStack;
